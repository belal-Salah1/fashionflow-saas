<?php

use App\Models\SocialAccount;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;

test('redirects to the oauth provider', function (string $provider) {
    Socialite::fake($provider);

    $response = $this->get("/auth/{$provider}/redirect");

    $response->assertRedirect();
})->with(['google', 'facebook']);

test('rejects an unsupported provider', function () {
    $response = $this->get('/auth/twitter/redirect');

    $response->assertNotFound();
});

test('creates a new user and logs in on first callback', function (string $provider) {
    Socialite::fake($provider, (new SocialiteUser)->map([
        'id' => 'provider-123',
        'name' => 'Jason Beggs',
        'email' => 'jason@example.com',
    ]));

    $response = $this->get("/auth/{$provider}/callback");

    $response->assertRedirect(route('dashboard', absolute: false));
    $this->assertAuthenticated();

    $this->assertDatabaseHas('users', [
        'name' => 'Jason Beggs',
        'email' => 'jason@example.com',
        'password' => null,
    ]);

    $this->assertDatabaseHas('social_accounts', [
        'provider' => $provider,
        'provider_id' => 'provider-123',
    ]);
})->with(['google', 'facebook']);

test('links to an existing verified-email user instead of creating a duplicate', function () {
    $user = User::factory()->create(['email' => 'jason@example.com']);

    Socialite::fake('google', (new SocialiteUser)->map([
        'id' => 'provider-456',
        'name' => 'Jason Beggs',
        'email' => 'jason@example.com',
    ]));

    $response = $this->get('/auth/google/callback');

    $response->assertRedirect(route('dashboard', absolute: false));
    $this->assertAuthenticatedAs($user);

    expect(User::count())->toBe(1);

    $this->assertDatabaseHas('social_accounts', [
        'user_id' => $user->id,
        'provider' => 'google',
        'provider_id' => 'provider-456',
    ]);
});

test('logs in an existing social account on subsequent callbacks', function () {
    $user = User::factory()->create();
    $socialAccount = SocialAccount::factory()->for($user)->create(['provider' => 'google']);

    Socialite::fake('google', (new SocialiteUser)->map([
        'id' => $socialAccount->provider_id,
        'name' => $user->name,
        'email' => $user->email,
    ]));

    $response = $this->get('/auth/google/callback');

    $response->assertRedirect(route('dashboard', absolute: false));
    $this->assertAuthenticatedAs($user);

    expect(SocialAccount::count())->toBe(1);
});

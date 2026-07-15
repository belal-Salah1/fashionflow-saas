<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\SocialAccount;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Throwable;

class SocialiteController extends Controller
{
    /**
     * Redirect the user to the OAuth provider.
     */
    public function redirect(string $provider): RedirectResponse
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Handle the OAuth provider callback.
     */
    public function callback(string $provider): RedirectResponse
    {
        try {
            $socialiteUser = Socialite::driver($provider)->user();
        } catch (Throwable $e) {
            return to_route('login')->with('status', 'We were unable to sign you in with '.ucfirst($provider).'.');
        }

        $socialAccount = SocialAccount::query()
            ->where('provider', $provider)
            ->where('provider_id', $socialiteUser->getId())
            ->first();

        if ($socialAccount) {
            Auth::login($socialAccount->user);

            return to_route('dashboard');
        }

        $user = User::query()
            ->where('email', $socialiteUser->getEmail())
            ->whereNotNull('email_verified_at')
            ->first();

        if (! $user) {
            $user = User::query()->create([
                'name' => $socialiteUser->getName(),
                'email' => $socialiteUser->getEmail(),
                'email_verified_at' => now(),
                'password' => null,
            ]);
        }

        $user->socialAccounts()->create([
            'provider' => $provider,
            'provider_id' => $socialiteUser->getId(),
            'token' => $socialiteUser->token,
            'refresh_token' => $socialiteUser->refreshToken,
            'avatar' => $socialiteUser->getAvatar(),
        ]);

        Auth::login($user);

        return to_route('dashboard');
    }
}

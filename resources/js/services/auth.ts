import { router } from '@inertiajs/vue3';

/**
 * Client-side session helpers. No login/logout/register routes exist yet —
 * this scaffold has no Authentication feature module. Add route-specific
 * calls here once Platform > Authentication lands, rather than hardcoding
 * paths elsewhere in the app.
 */
export const authService = {
    /** Re-fetches only the `auth` shared prop for the current page. */
    refresh(): void {
        router.reload({ only: ['auth'] });
    },
};

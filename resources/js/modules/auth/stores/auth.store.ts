import { usePage } from '@inertiajs/vue3';
import { defineStore } from 'pinia';
import { computed } from 'vue';

/**
 * Read-only view over the `auth.user` prop shared on every Inertia response
 * (see app/Http/Middleware/HandleInertiaRequests.php). Login/logout are
 * server-driven Inertia visits, not client mutations — this store never
 * writes `user` itself.
 */
export const useAuthStore = defineStore('auth', () => {
    const user = computed(() => usePage().props.auth.user);
    const isAuthenticated = computed(() => user.value !== null);

    return { user, isAuthenticated };
});

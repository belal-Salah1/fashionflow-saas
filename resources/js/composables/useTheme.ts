import { computed, watchEffect } from 'vue';
import { useThemeStore } from '@/stores/theme';
import type { ThemePreference } from '@/types/theme';

/**
 * Public API for reading/setting the theme. Applies the resolved theme to
 * <html class="dark"> so Tailwind's `dark:` variant picks it up.
 */
export function useTheme() {
    const store = useThemeStore();

    watchEffect(() => {
        document.documentElement.classList.toggle(
            'dark',
            store.resolved === 'dark',
        );
    });

    function setTheme(value: ThemePreference) {
        store.setPreference(value);
    }

    function toggleTheme() {
        setTheme(store.resolved === 'dark' ? 'light' : 'dark');
    }

    return {
        theme: computed(() => store.preference),
        resolvedTheme: computed(() => store.resolved),
        setTheme,
        toggleTheme,
    };
}

import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { STORAGE_KEYS } from '@/constants/storage-keys';
import { useLocalStorage } from '@/shared/composables/useLocalStorage';
import type { ResolvedTheme, ThemePreference } from '@/shared/types/theme';

const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

/**
 * Holds the user's theme preference and resolves it against the OS setting
 * when preference is 'system'. Consume via the `useTheme` composable rather
 * than this store directly — it also applies the `.dark` class to <html>.
 */
export const useThemeStore = defineStore('theme', () => {
    const preference = useLocalStorage<ThemePreference>(
        STORAGE_KEYS.THEME,
        'system',
    );
    const systemPrefersDark = ref(
        typeof window !== 'undefined'
            ? window.matchMedia(DARK_MEDIA_QUERY).matches
            : false,
    );

    if (typeof window !== 'undefined') {
        window
            .matchMedia(DARK_MEDIA_QUERY)
            .addEventListener('change', (event) => {
                systemPrefersDark.value = event.matches;
            });
    }

    const resolved = computed<ResolvedTheme>(() =>
        preference.value === 'system'
            ? systemPrefersDark.value
                ? 'dark'
                : 'light'
            : preference.value,
    );

    function setPreference(value: ThemePreference) {
        preference.value = value;
    }

    return { preference, resolved, setPreference };
});

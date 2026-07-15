import { defineStore } from 'pinia';
import { useLocalStorage } from '@/composables/useLocalStorage';
import { STORAGE_KEYS } from '@/constants/storage-keys';
import { i18n } from '@/i18n';
import type { SupportedLocale } from '@/i18n';

/**
 * Holds the active locale and keeps vue-i18n's global instance in sync.
 * Consume via components/composables — do not read `i18n.global.locale`
 * directly outside this store.
 */
export const useLocaleStore = defineStore('locale', () => {
    const locale = useLocalStorage<SupportedLocale>(STORAGE_KEYS.LOCALE, 'en');

    i18n.global.locale.value = locale.value;

    function setLocale(value: SupportedLocale) {
        locale.value = value;
        i18n.global.locale.value = value;
    }

    return { locale, setLocale };
});

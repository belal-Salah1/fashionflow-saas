/** Centralized localStorage keys so `useLocalStorage` callers never hardcode strings. */
export const STORAGE_KEYS = {
    THEME: 'fashionflow.theme',
    LOCALE: 'fashionflow.locale',
} as const;

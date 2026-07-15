import { createI18n } from 'vue-i18n';
import en from './locales/en.json';

export const SUPPORTED_LOCALES = ['en'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en },
});

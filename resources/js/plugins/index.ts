import type { App } from 'vue';
import { i18n } from '@/i18n';
import { pinia } from '@/plugins/pinia';

/**
 * Single place to register global Vue plugins. Add new ones here rather
 * than in app.ts so app.ts stays focused on Inertia bootstrapping.
 */
export function registerPlugins(app: App): void {
    app.use(pinia);
    app.use(i18n);
}

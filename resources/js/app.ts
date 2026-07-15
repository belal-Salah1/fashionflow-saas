import { createInertiaApp } from '@inertiajs/vue3';
import { registerPlugins } from '@/plugins';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
    withApp: (app) => {
        registerPlugins(app);
    },
});

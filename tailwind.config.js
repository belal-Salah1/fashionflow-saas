import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            // Semantic, theme-resolved colors (values live in resources/css/app.css)
            colors: {
                canvas: 'var(--color-canvas)',
                'canvas-sunken': 'var(--color-canvas-sunken)',
                'on-ink': 'var(--color-on-ink)',
                'on-accent': 'var(--color-on-accent)',
                'on-primary': 'var(--color-on-primary)',
                primary: 'var(--color-primary)',
                surface: {
                    1: 'var(--color-surface-1)',
                    2: 'var(--color-surface-2)',
                    3: 'var(--color-surface-3)',
                },
                hairline: {
                    DEFAULT: 'var(--color-hairline)',
                    strong: 'var(--color-hairline-strong)',
                },
                ink: {
                    DEFAULT: 'var(--color-ink)',
                    muted: 'var(--color-ink-muted)',
                    subtle: 'var(--color-ink-subtle)',
                    tertiary: 'var(--color-ink-tertiary)',
                },
                accent: {
                    DEFAULT: 'var(--color-accent)',
                    hover: 'var(--color-accent-hover)',
                    pressed: 'var(--color-accent-pressed)',
                    soft: 'var(--color-accent-soft)',
                },
                success: {
                    DEFAULT: 'var(--color-success)',
                    soft: 'var(--color-success-soft)',
                },
                warning: {
                    DEFAULT: 'var(--color-warning)',
                    soft: 'var(--color-warning-soft)',
                },
                danger: {
                    DEFAULT: 'var(--color-danger)',
                    soft: 'var(--color-danger-soft)',
                },
                info: {
                    DEFAULT: 'var(--color-info)',
                    soft: 'var(--color-info-soft)',
                },
            },

            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['"Clash Display"', 'Inter', ...defaultTheme.fontFamily.sans],
                mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
            },

            borderRadius: {
                sm: '6px',
                DEFAULT: '8px',
                md: '8px',
                lg: '12px',
                xl: '16px',
                '2xl': '24px',
                '3xl': '32px',
                pill: '9999px',
            },

            boxShadow: {
                e1: '0 1px 2px rgba(17,17,15,.04), 0 4px 12px rgba(17,17,15,.05)',
                e2: '0 2px 4px rgba(17,17,15,.05), 0 8px 24px rgba(17,17,15,.08)',
                e3: '0 4px 8px rgba(17,17,15,.06), 0 16px 40px rgba(17,17,15,.12)',
                e4: '0 8px 16px rgba(17,17,15,.08), 0 32px 64px rgba(17,17,15,.18)',
            },

            letterSpacing: {
                display: '-0.03em',
                headline: '-0.02em',
            },

            maxWidth: {
                content: '1200px',
            },

            transitionTimingFunction: {
                standard: 'cubic-bezier(0.2, 0, 0, 1)',
                emphasized: 'cubic-bezier(0.34, 1.3, 0.5, 1)',
            },

            keyframes: {
                floaty: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'gradient-pan': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                floaty: 'floaty 6s ease-in-out infinite',
                gradient: 'gradient-pan 8s ease infinite',
                marquee: 'marquee 32s linear infinite',
            },
        },
    },

    plugins: [forms],
};

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

const controlStatements = ['if', 'return', 'for', 'while', 'do', 'switch', 'try', 'throw'];
const paddingAroundControl = controlStatements.flatMap((stmt) => [
    { blankLine: 'always', prev: '*', next: stmt },
    { blankLine: 'always', prev: stmt, next: '*' },
]);

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    plugins: ['import', '@stylistic'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
            node: true,
        },
    },
    ignorePatterns: [
        'vendor',
        'node_modules',
        'public',
        'bootstrap/ssr',
        'tailwind.config.js',
        'vite.config.js',
        'resources/js/actions/**',
        'resources/js/shared/components/ui/*',
        'resources/js/routes/**',
        'resources/js/wayfinder/**',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                fixStyle: 'separate-type-imports',
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        curly: ['error', 'all'],
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        '@stylistic/padding-line-between-statements': ['error', ...paddingAroundControl],
    },
};

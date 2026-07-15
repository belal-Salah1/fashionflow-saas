<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/shared/composables/useTheme';

/**
 * Sun/moon button that flips between light and dark. Reads and drives the
 * global theme via `useTheme`, which applies `.dark` to <html>.
 */
const { resolvedTheme, toggleTheme } = useTheme();

const isDark = computed(() => resolvedTheme.value === 'dark');
const label = computed(() =>
    isDark.value ? 'Switch to light theme' : 'Switch to dark theme',
);
</script>

<template>
    <button
        type="button"
        :aria-label="label"
        :title="label"
        class="grid h-9 w-9 place-items-center rounded-md text-ink-subtle transition-colors duration-150 hover:bg-surface-3 hover:text-ink focus-visible:outline-accent"
        @click="toggleTheme"
    >
        <svg
            v-if="isDark"
            class="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path
                d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            />
        </svg>
        <svg
            v-else
            class="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
    </button>
</template>

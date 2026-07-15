<script setup lang="ts">
withDefaults(defineProps<{ withWordmark?: boolean }>(), {
    withWordmark: true,
});
</script>

<template>
    <span class="inline-flex items-center gap-2.5">
        <span
            class="grid h-8 w-8 place-items-center rounded-lg bg-primary text-on-primary shadow-e1"
            aria-hidden="true"
        >
            <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M5 4h14l-6 7v8l-2-1v-7z" />
            </svg>
        </span>
        <span
            v-if="withWordmark"
            class="font-display text-lg font-semibold tracking-headline text-ink"
        >
            FashionFlow
        </span>
    </span>
</template>

<script setup lang="ts">
const stats = [
    { value: '2,400+', label: 'labels & boutiques' },
    { value: '18M+', label: 'SKUs managed' },
    { value: '1.2M', label: 'orders / month' },
    { value: '42', label: 'countries' },
];
</script>

<template>
    <section class="bg-surface-1/50 border-y border-hairline">
        <div
            class="mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-8 lg:flex-row lg:justify-between"
        >
            <p v-reveal class="text-sm font-medium text-ink-subtle">
                Trusted by modern fashion teams — from single boutiques to
                multi-branch labels
            </p>
            <dl
                class="grid w-full grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:w-auto"
            >
                <div
                    v-for="(stat, i) in stats"
                    :key="stat.label"
                    v-reveal="i * 80"
                    class="text-center lg:text-left"
                >
                    <dt
                        class="font-display text-2xl font-semibold tracking-display text-ink"
                    >
                        {{ stat.value }}
                    </dt>
                    <dd class="mt-0.5 text-xs text-ink-subtle">
                        {{ stat.label }}
                    </dd>
                </div>
            </dl>
        </div>
    </section>
</template>

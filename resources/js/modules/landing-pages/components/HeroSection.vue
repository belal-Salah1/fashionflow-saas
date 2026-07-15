<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { onMounted, onUnmounted, ref } from 'vue';
import { useCountUp } from '@/shared/composables/useCountUp';

// The system's capabilities — highlighted one at a time in the hero.
const features = [
    {
        label: 'Catalog',
        paths: [
            'M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z',
        ],
    },
    {
        label: 'Inventory',
        paths: [
            'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z',
            'M3.3 7 12 12l8.7-5M12 22V12',
        ],
    },
    {
        label: 'Point of sale',
        paths: [
            'M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z',
            'M3 10h18M7 15h4',
        ],
    },
    {
        label: 'Customers',
        paths: ['M20 21a8 8 0 1 0-16 0', 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'],
    },
    {
        label: 'Campaigns',
        paths: ['m3 11 18-5v12L3 14v-3z', 'M11.6 16.8a3 3 0 1 1-5.8-1.6'],
    },
    {
        label: 'AI Studio',
        paths: [
            'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2',
        ],
    },
] as const;
const activeFeature = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
    const reduce = window.matchMedia?.(
        '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduce) {
        return;
    }
    timer = setInterval(() => {
        activeFeature.value = (activeFeature.value + 1) % features.length;
    }, 1600);
});
onUnmounted(() => clearInterval(timer));

// KPI count-ups inside the product mock.
const revenueEl = ref<HTMLElement | null>(null);
const ordersEl = ref<HTMLElement | null>(null);
const revenue = useCountUp(revenueEl, 48200, {
    format: (n) => `$${(n / 1000).toFixed(1)}k`,
});
const orders = useCountUp(ordersEl, 312);

const rows = [
    {
        name: 'Silk Slip Dress',
        sku: 'SS-2601',
        tone: 'success',
        label: 'In stock',
    },
    {
        name: 'Wool Overcoat',
        sku: 'WO-1184',
        tone: 'warning',
        label: 'Low · 4',
    },
    { name: 'Linen Set', sku: 'LN-0473', tone: 'info', label: 'Draft' },
] as const;

const toneClass: Record<string, string> = {
    success: 'bg-success-soft text-success',
    warning: 'bg-warning-soft text-warning',
    info: 'bg-info-soft text-info',
};
</script>

<template>
    <section id="top" class="relative overflow-hidden">
        <!-- ambient wash + glow -->
        <div class="ai-wash pointer-events-none absolute inset-0 -z-10" />
        <div
            class="pointer-events-none absolute -top-24 right-0 -z-10 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
            style="
                background: radial-gradient(
                    circle,
                    var(--color-accent-soft),
                    transparent 70%
                );
            "
        />

        <div
            class="mx-auto grid max-w-content items-center gap-14 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-44"
        >
            <!-- copy -->
            <div>
                <span
                    v-reveal
                    class="inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface-1 py-1.5 pl-2 pr-3.5 text-xs font-semibold tracking-wide text-ink-muted shadow-e1"
                >
                    <span
                        class="h-2 w-2 rounded-full bg-accent"
                        aria-hidden="true"
                    />
                    The operating system for fashion
                </span>

                <h1
                    v-reveal="60"
                    class="mt-6 font-display text-[clamp(2.6rem,6vw,4.25rem)] font-semibold leading-[1.03] tracking-display text-ink"
                >
                    Manage your
                    <span class="text-accent">fashion brand</span>.
                </h1>

                <p
                    v-reveal="120"
                    class="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
                >
                    One calm place to run every part of it — from the first
                    sketch to the last sale.
                </p>

                <!-- animated system capabilities -->
                <ul
                    v-reveal="170"
                    class="mt-6 flex flex-wrap gap-2"
                    aria-label="What FashionFlow includes"
                >
                    <li
                        v-for="(feature, i) in features"
                        :key="feature.label"
                        class="inline-flex items-center gap-1.5 rounded-pill border px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-standard"
                        :class="
                            activeFeature === i
                                ? 'scale-[1.04] border-transparent bg-accent-soft text-accent shadow-e1'
                                : 'border-hairline text-ink-muted'
                        "
                    >
                        <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                v-for="d in feature.paths"
                                :key="d"
                                :d="d"
                            />
                        </svg>
                        {{ feature.label }}
                    </li>
                </ul>

                <div
                    v-reveal="180"
                    class="mt-8 flex flex-wrap items-center gap-3"
                >
                    <Link
                        href="/register"
                        class="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-on-primary shadow-e2 transition-transform duration-150 ease-standard hover:-translate-y-0.5 active:translate-y-0 active:scale-[.98]"
                    >
                        Start free
                        <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </Link>
                    <a
                        href="#product"
                        class="inline-flex items-center gap-2 rounded-md border border-hairline-strong bg-surface-1 px-5 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface-3"
                    >
                        Take the tour
                    </a>
                </div>

                <p v-reveal="240" class="mt-5 text-sm text-ink-subtle">
                    Free 14-day trial · No card required · Cancel anytime
                </p>
            </div>

            <!-- product mock (the signature) -->
            <div v-reveal="120" class="relative">
                <div
                    class="animate-floaty rounded-xl border border-hairline bg-surface-1 p-3 shadow-e4 dark:shadow-[0_24px_64px_rgba(0,0,0,.55)] sm:p-4"
                >
                    <!-- window bar -->
                    <div
                        class="flex items-center gap-2.5 border-b border-hairline px-1 pb-3"
                    >
                        <span
                            class="grid h-6 w-6 place-items-center rounded-md bg-primary text-on-primary"
                            aria-hidden="true"
                        >
                            <svg
                                class="h-3 w-3"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M5 4h14l-6 7v8l-2-1v-7z" />
                            </svg>
                        </span>
                        <div class="text-[13px] font-semibold text-ink">
                            Aurélie Studio
                            <span class="font-normal text-ink-subtle"
                                >· Dashboard</span
                            >
                        </div>
                        <span
                            class="ml-auto inline-flex items-center gap-1.5 rounded-pill bg-success-soft px-2.5 py-1 text-[11px] font-semibold text-success"
                        >
                            <span class="h-1.5 w-1.5 rounded-full bg-success" />
                            Live
                        </span>
                    </div>

                    <!-- KPI row -->
                    <div class="mt-4 grid grid-cols-2 gap-3">
                        <div
                            class="rounded-lg border border-hairline bg-surface-2 p-3.5"
                        >
                            <div
                                class="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle"
                            >
                                Revenue
                            </div>
                            <div
                                ref="revenueEl"
                                class="mt-1 font-display text-2xl font-semibold tracking-display text-ink"
                            >
                                {{ revenue }}
                            </div>
                            <div
                                class="mt-0.5 text-[11px] font-semibold text-success"
                            >
                                ▲ 12.4% this week
                            </div>
                        </div>
                        <div
                            class="rounded-lg border border-hairline bg-surface-2 p-3.5"
                        >
                            <div
                                class="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle"
                            >
                                Orders
                            </div>
                            <div
                                ref="ordersEl"
                                class="mt-1 font-display text-2xl font-semibold tracking-display text-ink"
                            >
                                {{ orders }}
                            </div>
                            <div
                                class="mt-0.5 text-[11px] font-semibold text-success"
                            >
                                ▲ 4.1% this week
                            </div>
                        </div>
                    </div>

                    <!-- sparkline -->
                    <div
                        class="mt-3 rounded-lg border border-hairline bg-surface-2 p-3.5"
                    >
                        <div class="flex items-center justify-between">
                            <span
                                class="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle"
                                >Sales · 30 days</span
                            >
                            <span
                                class="text-[11px] font-semibold text-ink-muted"
                                >$182,400</span
                            >
                        </div>
                        <svg
                            class="mt-2 h-16 w-full"
                            viewBox="0 0 320 64"
                            preserveAspectRatio="none"
                            fill="none"
                        >
                            <defs>
                                <linearGradient
                                    id="spark"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0"
                                        stop-color="var(--color-accent)"
                                        stop-opacity="0.28"
                                    />
                                    <stop
                                        offset="1"
                                        stop-color="var(--color-accent)"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 48 L26 44 L52 46 L78 38 L104 40 L130 30 L156 33 L182 22 L208 26 L234 16 L260 19 L286 9 L320 12 L320 64 L0 64 Z"
                                fill="url(#spark)"
                            />
                            <path
                                d="M0 48 L26 44 L52 46 L78 38 L104 40 L130 30 L156 33 L182 22 L208 26 L234 16 L260 19 L286 9 L320 12"
                                stroke="var(--color-accent)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                    <!-- product rows -->
                    <div
                        class="mt-3 overflow-hidden rounded-lg border border-hairline"
                    >
                        <div
                            v-for="(row, i) in rows"
                            :key="row.sku"
                            class="flex items-center gap-3 px-3.5 py-2.5"
                            :class="
                                i < rows.length - 1
                                    ? 'border-b border-hairline'
                                    : ''
                            "
                        >
                            <span
                                class="h-7 w-7 shrink-0 rounded-md bg-surface-3"
                                aria-hidden="true"
                            />
                            <div class="min-w-0">
                                <div
                                    class="truncate text-[13px] font-medium text-ink"
                                >
                                    {{ row.name }}
                                </div>
                                <div
                                    class="font-mono text-[10px] text-ink-subtle"
                                >
                                    {{ row.sku }}
                                </div>
                            </div>
                            <span
                                class="ml-auto rounded-pill px-2.5 py-1 text-[11px] font-semibold"
                                :class="toneClass[row.tone]"
                                >{{ row.label }}</span
                            >
                        </div>
                    </div>
                </div>

                <!-- floating AI chip -->
                <div
                    class="ai-wash border-accent/30 absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border bg-surface-1 px-3.5 py-2.5 shadow-e3 sm:flex"
                    style="animation: floaty 6s ease-in-out infinite 1.2s"
                >
                    <span
                        class="grid h-6 w-6 place-items-center rounded-md text-accent"
                    >
                        <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"
                            />
                        </svg>
                    </span>
                    <div class="pr-1">
                        <div class="text-[11px] font-semibold text-ink">
                            AI wrote 12 descriptions
                        </div>
                        <div class="text-[10px] text-ink-subtle">
                            Review before publish
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

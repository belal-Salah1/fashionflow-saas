<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

const plans = [
    {
        name: 'Free',
        price: '$0',
        cadence: 'forever',
        blurb: 'One store to get going.',
        features: ['1 store', 'Up to 100 products', 'POS & orders'],
        featured: false,
    },
    {
        name: 'Studio',
        price: '$49',
        cadence: '/ month',
        blurb: 'For a growing label.',
        features: [
            '3 stores & branches',
            'Unlimited products',
            'AI Studio included',
            'Campaigns & storefront',
        ],
        featured: true,
    },
    {
        name: 'Label',
        price: '$149',
        cadence: '/ month',
        blurb: 'For multi-branch teams.',
        features: [
            'Unlimited stores',
            'Roles & permissions',
            'Forecasting & API',
            'Priority support',
        ],
        featured: false,
    },
];
</script>

<template>
    <section
        id="pricing"
        class="bg-surface-1/40 scroll-mt-24 border-t border-hairline"
    >
        <div class="mx-auto max-w-content px-6 py-24 lg:py-32">
            <div v-reveal class="mx-auto max-w-2xl text-center">
                <p
                    class="text-xs font-semibold uppercase tracking-widest text-accent"
                >
                    Pricing
                </p>
                <h2
                    class="mt-3 font-display text-4xl font-semibold tracking-display text-ink sm:text-5xl"
                >
                    Start free. Scale when you sell.
                </h2>
                <p class="mt-4 text-lg leading-relaxed text-ink-muted">
                    No card to start, no charge until you're ready to grow.
                </p>
            </div>

            <div class="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
                <article
                    v-for="(plan, i) in plans"
                    :key="plan.name"
                    v-reveal="i * 90"
                    class="relative rounded-xl border bg-surface-1 p-6 transition duration-300 ease-standard hover:-translate-y-1"
                    :class="
                        plan.featured
                            ? 'border-accent shadow-e2 ring-1 ring-accent md:-my-2 md:py-8'
                            : 'border-hairline shadow-e1 hover:shadow-e2'
                    "
                >
                    <span
                        v-if="plan.featured"
                        class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-accent px-3 py-1 text-[11px] font-semibold text-on-accent"
                        >Most popular</span
                    >
                    <h3
                        class="text-sm font-semibold uppercase tracking-wide text-ink-subtle"
                    >
                        {{ plan.name }}
                    </h3>
                    <div class="mt-3 flex items-baseline gap-1.5">
                        <span
                            class="font-display text-4xl font-semibold tracking-display text-ink"
                            >{{ plan.price }}</span
                        >
                        <span class="text-sm text-ink-subtle">{{
                            plan.cadence
                        }}</span>
                    </div>
                    <p class="mt-2 text-sm text-ink-muted">{{ plan.blurb }}</p>
                    <ul class="mt-5 space-y-2.5">
                        <li
                            v-for="feature in plan.features"
                            :key="feature"
                            class="flex items-center gap-2.5 text-sm text-ink"
                        >
                            <svg
                                class="h-4 w-4 shrink-0 text-accent"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                            {{ feature }}
                        </li>
                    </ul>
                    <Link
                        href="/register"
                        class="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-transform duration-150 active:scale-[.98]"
                        :class="
                            plan.featured
                                ? 'bg-primary text-on-primary shadow-e1'
                                : 'border border-hairline-strong bg-surface-1 text-ink hover:bg-surface-3'
                        "
                    >
                        {{
                            plan.featured
                                ? 'Start free trial'
                                : 'Choose ' + plan.name
                        }}
                    </Link>
                </article>
            </div>

            <div
                v-reveal
                class="ai-wash mx-auto mt-16 flex max-w-4xl flex-col items-center gap-5 rounded-2xl border border-hairline p-10 text-center sm:p-12"
            >
                <h3
                    class="font-display text-3xl font-semibold tracking-display text-ink"
                >
                    Bring your label into one calm place.
                </h3>
                <p class="max-w-xl text-ink-muted">
                    Set up your first store in minutes. Import your catalog,
                    open the register, and let the AI studio handle the
                    busywork.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/register"
                        class="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-e2 transition-transform duration-150 ease-standard hover:-translate-y-0.5 active:scale-[.98]"
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
                        href="mailto:sales@fashionflow.app"
                        class="inline-flex items-center rounded-md border border-hairline-strong bg-surface-1 px-6 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface-3"
                    >
                        Talk to sales
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

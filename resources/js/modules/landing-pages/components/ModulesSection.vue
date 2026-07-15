<script setup lang="ts">
const cardBase =
    'group rounded-xl border border-hairline bg-surface-1 p-6 shadow-e1 transition duration-300 ease-standard hover:-translate-y-1 hover:border-hairline-strong hover:shadow-e2';
const iconTile =
    'mb-4 grid h-11 w-11 place-items-center rounded-lg bg-accent-soft text-accent';
</script>

<template>
    <section id="product" class="scroll-mt-24">
        <div class="mx-auto max-w-content px-6 py-24 lg:py-32">
            <div id="modules" class="max-w-2xl scroll-mt-24">
                <p
                    v-reveal
                    class="text-xs font-semibold uppercase tracking-widest text-accent"
                >
                    One system, not seven tabs
                </p>
                <h2
                    v-reveal="60"
                    class="mt-3 font-display text-4xl font-semibold tracking-display text-ink sm:text-5xl"
                >
                    Everything the label runs on.
                </h2>
                <p
                    v-reveal="120"
                    class="mt-4 text-lg leading-relaxed text-ink-muted"
                >
                    Stop stitching together a POS, a spreadsheet, and three apps
                    that don't talk. FashionFlow keeps products, stock, sales,
                    and customers in one place — so a change in one shows up
                    everywhere it should.
                </p>
            </div>

            <div class="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6">
                <!-- Catalog -->
                <article v-reveal class="md:col-span-3" :class="cardBase">
                    <div :class="iconTile">
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-ink">
                        Catalog & variants
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-ink-muted">
                        Every product with its full size and color matrix,
                        media, and pricing — variants that behave like variants,
                        not duplicate listings.
                    </p>
                    <div class="mt-4 flex flex-wrap items-center gap-1.5">
                        <span
                            v-for="size in ['XS', 'S', 'M', 'L', 'XL']"
                            :key="size"
                            class="rounded-md border border-hairline bg-surface-2 px-2 py-1 text-[11px] font-semibold text-ink-muted"
                            >{{ size }}</span
                        >
                        <span class="mx-1 h-4 w-px bg-hairline" />
                        <span
                            v-for="c in [
                                '#1a1a19',
                                '#1f9e7a',
                                '#b8791f',
                                '#c23b32',
                            ]"
                            :key="c"
                            class="h-5 w-5 rounded-full border border-hairline"
                            :style="{ background: c }"
                        />
                    </div>
                </article>

                <!-- Inventory -->
                <article v-reveal="80" class="md:col-span-3" :class="cardBase">
                    <div :class="iconTile">
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                            />
                            <path d="M3.3 7 12 12l8.7-5M12 22V12" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-ink">
                        Inventory across branches
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-ink-muted">
                        Live stock per location, low-stock alerts, and transfers
                        — every movement tied to a transaction you can audit.
                    </p>
                    <div class="mt-4 space-y-2">
                        <div
                            v-for="bar in [
                                {
                                    name: 'Flagship',
                                    pct: 82,
                                    tone: 'bg-success',
                                },
                                {
                                    name: 'Downtown',
                                    pct: 46,
                                    tone: 'bg-accent',
                                },
                                { name: 'Online', pct: 18, tone: 'bg-warning' },
                            ]"
                            :key="bar.name"
                            class="flex items-center gap-3"
                        >
                            <span class="w-16 text-[11px] text-ink-subtle">{{
                                bar.name
                            }}</span>
                            <span
                                class="h-1.5 flex-1 overflow-hidden rounded-pill bg-surface-3"
                            >
                                <span
                                    class="block h-full rounded-pill"
                                    :class="bar.tone"
                                    :style="{ width: bar.pct + '%' }"
                                />
                            </span>
                        </div>
                    </div>
                </article>

                <!-- Orders & POS -->
                <article v-reveal class="md:col-span-2" :class="cardBase">
                    <div :class="iconTile">
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
                            />
                            <path d="M3 10h18M7 15h4" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-ink">Orders & POS</h3>
                    <p class="mt-2 text-sm leading-relaxed text-ink-muted">
                        Ring up in-store or online sales, take refunds, and
                        watch stock and revenue update the moment an order is
                        paid.
                    </p>
                </article>

                <!-- Customers & CRM -->
                <article v-reveal="80" class="md:col-span-2" :class="cardBase">
                    <div :class="iconTile">
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                            />
                            <circle cx="9" cy="7" r="4" />
                            <path
                                d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                            />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-ink">
                        Customers & CRM
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-ink-muted">
                        Profiles, order history, and wallet balances — segment
                        your best buyers and follow up without leaving the app.
                    </p>
                </article>

                <!-- Campaigns -->
                <article v-reveal="160" class="md:col-span-2" :class="cardBase">
                    <div :class="iconTile">
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="m3 11 18-5v12L3 14v-3z" />
                            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-ink">Campaigns</h3>
                    <p class="mt-2 text-sm leading-relaxed text-ink-muted">
                        Plan a drop, schedule a flash sale, and track what each
                        campaign actually earned — with guardrails on discounts.
                    </p>
                </article>

                <!-- Storefront -->
                <article v-reveal class="md:col-span-3" :class="cardBase">
                    <div :class="iconTile">
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="m2 7 2-4h16l2 4M4 7v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7M2 7h20M9 21v-9h6v9"
                            />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-ink">
                        Storefront & landing pages
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-ink-muted">
                        Launch a photography-first store and campaign landing
                        pages that stay in sync with your catalog automatically.
                    </p>
                    <div class="mt-4 grid grid-cols-3 gap-2">
                        <span
                            v-for="n in 3"
                            :key="n"
                            class="aspect-[4/5] rounded-md bg-gradient-to-br from-surface-3 to-surface-2"
                        />
                    </div>
                </article>

                <!-- Analytics -->
                <article v-reveal="80" class="md:col-span-3" :class="cardBase">
                    <div :class="iconTile">
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M3 3v18h18" />
                            <path d="m7 14 4-4 3 3 5-6" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-ink">
                        Analytics & forecasting
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-ink-muted">
                        See what's selling, what's stuck, and what to reorder —
                        with forecasts that read your own history, not guesses.
                    </p>
                    <svg
                        class="mt-4 h-14 w-full"
                        viewBox="0 0 320 56"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        <path
                            d="M0 44 L40 40 L80 42 L120 30 L160 34 L200 20 L240 24 L280 12 L320 16"
                            stroke="var(--color-accent)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </article>
            </div>
        </div>
    </section>
</template>

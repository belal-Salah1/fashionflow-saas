<script setup lang="ts">
const features = [
    'Product copy that sounds like your brand, not a robot',
    'Design and pattern concepts from a text prompt',
    'Campaign copy, subject lines, and schedules',
    'A store assistant that answers from your own data',
    'Demand forecasts built on your sales history',
];
</script>

<template>
    <section id="ai" class="scroll-mt-24">
        <div class="mx-auto max-w-content px-6 py-12">
            <div
                v-reveal
                class="ai-wash border-accent/25 overflow-hidden rounded-3xl border p-8 shadow-e2 sm:p-12 lg:p-16"
            >
                <div class="grid items-center gap-12 lg:grid-cols-2">
                    <!-- copy -->
                    <div>
                        <p
                            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent"
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
                            AI Studio
                        </p>
                        <h2
                            class="mt-3 font-display text-4xl font-semibold tracking-display text-ink sm:text-5xl"
                        >
                            A studio assistant that never sleeps.
                        </h2>
                        <p class="mt-4 text-lg leading-relaxed text-ink-muted">
                            Draft the copy, spin up campaign ideas, and forecast
                            next month — in seconds. Every result is clearly
                            marked as AI and waits for your approval before
                            anything goes live.
                        </p>
                        <ul class="mt-6 space-y-3">
                            <li
                                v-for="feature in features"
                                :key="feature"
                                class="flex items-start gap-3 text-sm text-ink"
                            >
                                <span
                                    class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-on-accent"
                                >
                                    <svg
                                        class="h-3 w-3"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </span>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <!-- AI generation mock -->
                    <div
                        class="rounded-xl border border-hairline bg-surface-1 p-5 shadow-e3"
                    >
                        <div
                            class="flex items-center gap-2 border-b border-hairline pb-3"
                        >
                            <span class="text-sm font-semibold text-ink"
                                >Product copy</span
                            >
                            <span
                                class="ml-auto inline-flex items-center gap-1.5 rounded-pill bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent"
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
                                    <path d="M12 3v18M3 12h18" />
                                </svg>
                                AI generated
                            </span>
                        </div>

                        <p class="mt-3 text-xs text-ink-subtle">Prompt</p>
                        <p class="mt-1 text-sm text-ink-muted">
                            “Write a product description for the Silk Slip Dress
                            — romantic, minimal, under 40 words.”
                        </p>

                        <!-- thinking hairline -->
                        <div
                            class="shimmer mt-4 h-0.5 w-full rounded-pill"
                            aria-hidden="true"
                        />

                        <p class="mt-4 text-sm leading-relaxed text-ink">
                            Cut from liquid silk, the slip skims the body and
                            catches the light with every step. A bias drape, an
                            adjustable strap, and nothing else it doesn't need.
                        </p>

                        <div class="mt-5 flex items-center gap-2.5">
                            <button
                                type="button"
                                class="inline-flex items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-on-primary transition-transform duration-150 active:scale-[.98]"
                            >
                                Approve & publish
                            </button>
                            <button
                                type="button"
                                class="inline-flex items-center gap-1.5 rounded-md border border-hairline-strong bg-surface-1 px-3.5 py-2 text-xs font-semibold text-ink transition-colors duration-150 hover:bg-surface-3"
                            >
                                <svg
                                    class="h-3.5 w-3.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                                    <path d="M3 3v5h5" />
                                </svg>
                                Regenerate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

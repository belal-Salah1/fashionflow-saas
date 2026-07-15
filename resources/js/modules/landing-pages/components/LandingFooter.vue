<script setup lang="ts">
import BrandMark from './BrandMark.vue';

const columns = [
    {
        title: 'Product',
        links: [
            { label: 'Modules', href: '#modules' },
            { label: 'AI Studio', href: '#ai' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Storefront', href: '#product' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Contact', href: 'mailto:hello@fashionflow.app' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Help center', href: '#' },
            { label: 'Guides', href: '#' },
            { label: 'API', href: '#' },
            { label: 'Status', href: '#' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Security', href: '#' },
        ],
    },
];
</script>

<template>
    <footer class="border-t border-hairline bg-canvas">
        <div class="mx-auto max-w-content px-6 py-16">
            <div class="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
                <div class="max-w-xs">
                    <BrandMark />
                    <p class="mt-4 text-sm leading-relaxed text-ink-subtle">
                        The operating system for fashion brands — catalog to
                        checkout, in one calm place.
                    </p>
                </div>
                <div v-for="col in columns" :key="col.title">
                    <h4
                        class="text-xs font-semibold uppercase tracking-widest text-ink-subtle"
                    >
                        {{ col.title }}
                    </h4>
                    <ul class="mt-4 space-y-2.5">
                        <li v-for="link in col.links" :key="link.label">
                            <a
                                :href="link.href"
                                class="text-sm text-ink-muted transition-colors duration-150 hover:text-accent"
                                >{{ link.label }}</a
                            >
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 sm:flex-row"
            >
                <p class="text-sm text-ink-subtle">
                    © 2026 FashionFlow. All rights reserved.
                </p>
                <p class="text-sm text-ink-tertiary">
                    Made for people who make beautiful things.
                </p>
            </div>
        </div>
    </footer>
</template>

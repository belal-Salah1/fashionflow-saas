<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { onMounted, onUnmounted, ref } from 'vue';
import ThemeToggle from '@/shared/components/layout/ThemeToggle.vue';
import BrandMark from './BrandMark.vue';

const scrolled = ref(false);
const onScroll = (): void => {
    scrolled.value = window.scrollY > 8;
};
onMounted(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const links = [
    { label: 'Product', href: '#product' },
    { label: 'Modules', href: '#modules' },
    { label: 'AI Studio', href: '#ai' },
    { label: 'Pricing', href: '#pricing' },
];
</script>

<template>
    <header
        class="glass fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
        :class="scrolled ? 'border-hairline' : 'border-transparent'"
    >
        <nav
            class="mx-auto flex h-16 max-w-content items-center justify-between gap-6 px-6"
        >
            <a href="#top" class="shrink-0" aria-label="FashionFlow home">
                <BrandMark />
            </a>

            <div class="hidden items-center gap-1 md:flex">
                <a
                    v-for="link in links"
                    :key="link.href"
                    :href="link.href"
                    class="rounded-md px-3 py-2 text-sm font-medium text-ink-subtle transition-colors duration-150 hover:bg-surface-3 hover:text-ink"
                >
                    {{ link.label }}
                </a>
            </div>

            <div class="flex items-center gap-1.5">
                <ThemeToggle />
                <Link
                    href="/login"
                    class="hidden rounded-md px-3 py-2 text-sm font-semibold text-ink-muted transition-colors duration-150 hover:text-ink sm:inline-flex"
                >
                    Log in
                </Link>
                <Link
                    href="/register"
                    class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-e1 transition-transform duration-150 ease-standard hover:-translate-y-0.5 active:translate-y-0 active:scale-[.98]"
                >
                    Start free
                </Link>
            </div>
        </nav>
    </header>
</template>

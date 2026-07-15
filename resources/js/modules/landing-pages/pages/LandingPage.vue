<script setup lang="ts">
import { useTheme } from '@/shared/composables/useTheme';
import AiSection from '../components/AiSection.vue';
import CtaSection from '../components/CtaSection.vue';
import HeroSection from '../components/HeroSection.vue';
import LandingFooter from '../components/LandingFooter.vue';
import LandingNav from '../components/LandingNav.vue';
import ModulesSection from '../components/ModulesSection.vue';
import StatsStrip from '../components/StatsStrip.vue';
import TestimonialSection from '../components/TestimonialSection.vue';

// Keep <html class="dark"> in sync with the persisted theme preference.
useTheme();
</script>

<template>
    <div class="min-h-screen bg-canvas text-ink">
        <LandingNav />
        <main>
            <HeroSection />
            <StatsStrip />
            <ModulesSection />
            <AiSection />
            <TestimonialSection />
            <CtaSection />
        </main>
        <LandingFooter />
    </div>
</template>

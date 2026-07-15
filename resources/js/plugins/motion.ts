import type { App, DirectiveBinding } from 'vue';

/**
 * `v-reveal` — fades + lifts an element into view once, when it first
 * scrolls into the viewport. Pass a number to stagger the entrance:
 * `v-reveal="120"` delays the transition by 120ms.
 *
 * Honors `prefers-reduced-motion` by showing the element immediately.
 * Pairs with the `.reveal` / `.reveal.is-visible` rules in app.css.
 */
const prefersReducedMotion = (): boolean =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const observers = new WeakMap<HTMLElement, IntersectionObserver>();

function reveal(
    el: HTMLElement,
    binding: DirectiveBinding<number | undefined>,
) {
    el.classList.add('reveal');
    if (typeof binding.value === 'number') {
        el.style.setProperty('--reveal-delay', `${binding.value}ms`);
    }

    if (prefersReducedMotion()) {
        el.classList.add('is-visible');
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    obs.unobserve(el);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    observers.set(el, observer);
}

export function registerMotion(app: App): void {
    app.directive('reveal', {
        mounted: reveal,
        unmounted(el: HTMLElement) {
            observers.get(el)?.disconnect();
            observers.delete(el);
        },
    });
}

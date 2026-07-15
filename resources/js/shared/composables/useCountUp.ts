import { onMounted, onUnmounted, ref, type Ref } from 'vue';

interface CountUpOptions {
    /** Total animation time in ms. */
    duration?: number;
    /** Map the raw number to the string shown (currency, k-suffix, etc.). */
    format?: (value: number) => string;
    /** Value to start counting from. */
    from?: number;
}

/**
 * Animates a number from `from` up to `target` the first time `el` scrolls
 * into view. Returns the display ref to bind in the template. Falls back to
 * the final value immediately under `prefers-reduced-motion`.
 */
export function useCountUp(
    el: Ref<HTMLElement | null>,
    target: number,
    options: CountUpOptions = {},
): Ref<string> {
    const {
        duration = 1400,
        from = 0,
        format = (value: number) => Math.round(value).toLocaleString(),
    } = options;

    const display = ref(format(from));
    let frame = 0;
    let observer: IntersectionObserver | null = null;
    let started = false;

    const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    function run(): void {
        if (started) {
            return;
        }
        started = true;

        if (reduce) {
            display.value = format(target);
            return;
        }

        const start = performance.now();
        const step = (now: number): void => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            display.value = format(from + (target - from) * eased);
            if (progress < 1) {
                frame = requestAnimationFrame(step);
            }
        };
        frame = requestAnimationFrame(step);
    }

    onMounted(() => {
        const node = el.value;
        if (!node || typeof IntersectionObserver === 'undefined') {
            run();
            return;
        }
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        run();
                        observer?.disconnect();
                    }
                });
            },
            { threshold: 0.4 },
        );
        observer.observe(node);
    });

    onUnmounted(() => {
        cancelAnimationFrame(frame);
        observer?.disconnect();
    });

    return display;
}

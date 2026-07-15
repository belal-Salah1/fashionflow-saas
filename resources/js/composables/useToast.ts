import { reactive } from 'vue';
import type { Toast, ToastOptions } from '@/types/toast';

const DEFAULT_DURATION_MS = 4000;

// Module-level singleton so any component can push/dismiss the same toast queue.
const toasts = reactive<Toast[]>([]);
let nextId = 0;

/**
 * Global toast queue. Pair with a `components/feedback` renderer that reads
 * `toasts` and calls `dismiss` (e.g. on click or timeout).
 */
export function useToast() {
    function show(message: string, options: ToastOptions = {}): number {
        const id = ++nextId;

        toasts.push({
            id,
            message,
            variant: options.variant ?? 'info',
            durationMs: options.durationMs ?? DEFAULT_DURATION_MS,
        });

        setTimeout(
            () => dismiss(id),
            options.durationMs ?? DEFAULT_DURATION_MS,
        );

        return id;
    }

    function dismiss(id: number) {
        const index = toasts.findIndex((toast) => toast.id === id);

        if (index !== -1) {
            toasts.splice(index, 1);
        }
    }

    return { toasts, show, dismiss };
}

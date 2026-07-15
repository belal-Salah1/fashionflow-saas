import { customRef } from 'vue';
import type { Ref } from 'vue';

/**
 * Ref whose reads stay live but whose writes are debounced by `delayMs`
 * before the underlying value updates and triggers reactivity.
 */
export function useDebounce<T>(value: T, delayMs = 300): Ref<T> {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    return customRef((track, trigger) => ({
        get() {
            track();

            return value;
        },
        set(newValue: T) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                value = newValue;
                trigger();
            }, delayMs);
        },
    }));
}

import { ref, watch } from 'vue';
import type { Ref } from 'vue';

/**
 * Reactive ref that is synced to `localStorage` under `key`.
 * Falls back to `defaultValue` when the key is unset or unparsable
 * (e.g. during SSR, or when storage is unavailable).
 */
export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T> {
    const storage =
        typeof window !== 'undefined' ? window.localStorage : undefined;
    const stored = storage?.getItem(key);
    const initial = stored ? (JSON.parse(stored) as T) : defaultValue;
    const state = ref<T>(initial) as Ref<T>;

    watch(
        state,
        (value) => {
            storage?.setItem(key, JSON.stringify(value));
        },
        { deep: true },
    );

    return state;
}

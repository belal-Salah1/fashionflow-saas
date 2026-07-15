export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export type Toast = {
    id: number;
    message: string;
    variant: ToastVariant;
    durationMs: number;
};

export type ToastOptions = {
    variant?: ToastVariant;
    durationMs?: number;
};

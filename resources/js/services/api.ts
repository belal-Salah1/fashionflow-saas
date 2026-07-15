/**
 * Thin client for *external* HTTP APIs (third-party services, not the
 * Laravel backend). Talk to Laravel through Inertia visits/forms instead —
 * see CLAUDE.md's "Inertia SPA, no separate API layer" note.
 */
export class ApiError extends Error {
    constructor(
        message: string,
        public readonly status: number,
        public readonly body: unknown,
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

type RequestOptions = Omit<RequestInit, 'body'> & { body?: unknown };

async function request<T>(
    url: string,
    options: RequestOptions = {},
): Promise<T> {
    const response = await fetch(url, {
        ...options,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...options.headers,
        },
        body:
            options.body !== undefined
                ? JSON.stringify(options.body)
                : undefined,
    });

    const contentType = response.headers.get('content-type');
    const data = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();

    if (!response.ok) {
        throw new ApiError(response.statusText, response.status, data);
    }

    return data as T;
}

export const api = {
    get: <T>(url: string, options?: RequestOptions) =>
        request<T>(url, { ...options, method: 'GET' }),
    post: <T>(url: string, body?: unknown, options?: RequestOptions) =>
        request<T>(url, { ...options, method: 'POST', body }),
    put: <T>(url: string, body?: unknown, options?: RequestOptions) =>
        request<T>(url, { ...options, method: 'PUT', body }),
    patch: <T>(url: string, body?: unknown, options?: RequestOptions) =>
        request<T>(url, { ...options, method: 'PATCH', body }),
    delete: <T>(url: string, options?: RequestOptions) =>
        request<T>(url, { ...options, method: 'DELETE' }),
};

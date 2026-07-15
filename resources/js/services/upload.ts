export type UploadProgressHandler = (percent: number) => void;

/**
 * Uploads a single file via XHR (not fetch) so progress can be reported.
 * Works against any endpoint accepting multipart/form-data — no assumptions
 * about what's being uploaded or where.
 */
export function uploadFile(
    url: string,
    file: File,
    onProgress?: UploadProgressHandler,
): Promise<XMLHttpRequest> {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        if (onProgress) {
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    onProgress(Math.round((event.loaded / event.total) * 100));
                }
            });
        }

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr);
            } else {
                reject(new Error(`Upload failed with status ${xhr.status}`));
            }
        });
        xhr.addEventListener('error', () => reject(new Error('Upload failed')));

        xhr.send(formData);
    });
}

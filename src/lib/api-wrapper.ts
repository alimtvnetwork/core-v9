export type QueryResult<T> = {
  isSuccess: boolean;
  isFailure: boolean;
  data: T | null;
  error: Error | null;
};

/**
 * A wrapper around fetch that logs errors automatically.
 * It returns a structured result (isSuccess, isFailure, data, error).
 */
export async function safeQuery<T>(url: string, options?: RequestInit): Promise<QueryResult<T>> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(HTTP error! status:  );
    }
    const data = await response.json();
    return { isSuccess: true, isFailure: false, data, error: null };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    console.error([Query Error] Failed to fetch from :, err.message);
    return { isSuccess: false, isFailure: true, data: null, error: err };
  }
}

/**
 * Split a string into segments based on a delimiter
 */
export function segment(str: string, delimiter: string): string[] {
    return str
        .split(delimiter)
        .map((s) => s.trim())
        .filter(Boolean);
}
/**
 *
 * Test with normal strings.
 * Test with empty string.
 * Test with non-string inputs to check for error handling.
 *
 * */

export function transformString(str: string) {
    return str.split('').reverse().join('').toUpperCase();
}

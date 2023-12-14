/**
 * Test Zero: Input is zero (expect empty array).
 * Test One: Input is one (expect array with single element).
 * Test Negative Input: Negative numbers should be handled or rejected.
 * Test Small Numbers: Typical small number inputs like 2, 3, 5, etc.
 * Test Larger Numbers: To check if the function scales and performs well.
 * Test Non-Integer Inputs: Such as floats, strings, or other types.
 */

export function generateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

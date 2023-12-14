/**
* Test with an array of numbers.
* Test with an empty array.
* Test with a non-array input.
* */

export function aggregateArray(arr: any) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array');
    return arr.reduce((acc, val) => {
        return {
            sum: acc.sum + val,
            product: acc.product * val,
            count: acc.count + 1
        };
    }, { sum: 0, product: 1, count: 0 });
}

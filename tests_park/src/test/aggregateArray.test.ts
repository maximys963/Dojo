import {describe, expect, test} from 'vitest';
import {aggregateArray} from "../aggregateArray";

describe('aggregateArray functionality', () => {
    test('should aggregate an array of numbers', () => {
        const array = aggregateArray([1, 2, 3]);
        expect(array).toEqual({ sum: 6, product: 6, count: 3 });
    });

    test('should return zero sum and one product for an empty array', () => {
        const array = aggregateArray([]);
        expect(array).toEqual({ sum: 0, product: 1, count: 0 });
    });

    test('should aggregate an array with zeros', () => {
        const array = aggregateArray([0, 1, 2]);
        expect(array).toEqual({ sum: 3, product: 0, count: 3 });
    });

    test('should aggregates an array with negative numbers', () => {
        const array = aggregateArray([-1, -2, -3]);
        expect(array).toEqual({ sum: -6, product: -6, count: 3 });
    });

    test('should throw an error if the input is not an array', () => {
        expect(() => aggregateArray({}).toThrow('Input must be an array'));
    });
});

import {describe, expect, test} from "vitest";
import {generateFibonacci} from "../generateFibonacci";

describe("generateFibonacci functionality", () => {
    test("should return empty array when input is zero", () => {
        expect(generateFibonacci(0)).toEqual([]);
    });

    test("should return single element array when input is one", () => {
        expect(generateFibonacci(1)).toEqual([0]);
    });

    test("should work properly for small numbers", () => {
        expect(generateFibonacci(2)).toEqual([0, 1]);
        expect(generateFibonacci(3)).toEqual([0, 1, 1]);
        expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test("should work properly for larger numbers", () => {
        expect(generateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test("should return empty array when input is less than zero", () => {
        expect(generateFibonacci(-1)).toEqual([]);
    });

});

// Because of the typeScript compiler, we can't pass a string to the test function.
// I think it could be like a primary test -_-
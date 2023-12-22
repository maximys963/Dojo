import {describe, expect, test} from "vitest";
import {transformString} from "../transformString";

describe("transformString functionality", () => {
    test("should be able to reverse string and make it uppercase", () => {
        expect(transformString("hello")).toBe("OLLEH");
    });

    test("should be able to return empty string", () => {
        expect(transformString("")).toBe("");
    });
});

// Because of the typeScript compiler, we can't pass a number to the transformString function.
// I think it could be like a primary test -_-
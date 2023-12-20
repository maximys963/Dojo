import {describe, test, expect} from "vitest";
import {isWithinDateRange} from "../isWithDateRange";

describe("isWithinDateRange functionality", () => {
    test("should be able to return true if the date in range", () => {
        expect(isWithinDateRange(new Date("2022-12-15"), new Date("2022-12-01"), new Date("2022-12-31"))).toBe(true);
    });

    test("should be able to return false if the date not in range", () => {
        expect(isWithinDateRange(new Date("2022-11-30"), new Date("2022-12-01"), new Date("2022-12-31"))).toBe(false);
    });
});
import { isNumeric, isEmailValid } from "./utils";
describe("isNumeric()", () => {
    describe("when input string contains number", () => {
        test("should be true", () => {
            expect(isNumeric("1")).toBe(true);
        });
    });
    describe("when input string contains letters", () => {
        test("should be false", () => {
            expect(isNumeric("1ac")).toBe(false);
        });
    });
});

describe("isEmailValid()", () => {
    describe("when input email is valid", () => {
        test("should be true", () => {
            expect(isEmailValid("dtsuper3@gmail.com")).toBe(true);
        });
    });
    describe("when input string contains letters", () => {
        test("should be false", () => {
            expect(isEmailValid("abcd.es")).toBe(false);
        });
    });
});

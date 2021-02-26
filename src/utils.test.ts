import { isNumeric, isEmailValid, isPasswordStrong, parseQueryString, allowNumberOnly } from "./utils";
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


describe("isPasswordStrong()", () => {
  describe("when input valid password, contains min 8 characters, alphabet, number, special character", () => {
    test("should be true", () => {
      expect(isPasswordStrong("#Deepak123;")).toBe(true);
    })
  })

  describe("when input invalid password", () => {
    test("should be true", () => {
      expect(isPasswordStrong("Deepak123")).toBe(false);
    })
  })
})

describe("parseQueryString()", () => {
  describe('when input query string', () => {
    test("should parse query string", () => {
      expect(parseQueryString("q1=1&q2=2")).toMatchObject({ "q1": "1", "q2": "2" });
    })
    test("should parse empty query string", () => {
      expect(parseQueryString("")).toMatchObject({});
    })
    test("should parse undefined value", () => {
      expect(parseQueryString(undefined)).toMatchObject({});
    })
  })

})

describe("allowNumberOnly()", () => {
  describe("when input a keyboard key code", () => {
    test("should pass when valid", () => {
      expect(allowNumberOnly(30)).toBe(true);
    })
    test("should pass when invalid", () => {
      expect(allowNumberOnly(37)).toBe(false);
    })
    test("should pass when invalid greater than 57", () => {
      expect(allowNumberOnly(60)).toBe(false);
    })
    test("should pass when undefined", () => {
      expect(allowNumberOnly(undefined)).toBe(false);
    })
  })
})
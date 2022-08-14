import {
  isNumeric,
  isEmailValid,
  isPasswordStrong,
  parseQueryString,
  stringCapitalize,
  textCapitalize,
  chunkArray,
  isURLValid,
  isObjectEmpty,
  formatBytes,
} from "./utils";

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
    });
  });

  describe("when input invalid password", () => {
    test("should be true", () => {
      expect(isPasswordStrong("Deepak123")).toBe(false);
    });
  });
});

describe("parseQueryString()", () => {
  describe("when input query string", () => {
    test("should parse query string", () => {
      expect(parseQueryString("q1=1&q2=2")).toMatchObject({ q1: "1", q2: "2" });
    });
    test("should parse empty query string", () => {
      expect(parseQueryString("")).toMatchObject({});
    });
    test("should parse undefined value", () => {
      expect(parseQueryString(undefined)).toMatchObject({});
    });
  });
});

describe("stringCapitalize()", () => {
  test("should capitalize string", () => {
    expect(stringCapitalize("test")).toBe("Test");
  });
  test("should return same string", () => {
    expect(stringCapitalize("")).toBe("");
  });
});

describe("textCapitalize()", () => {
  test("should capitalize each string", () => {
    expect(textCapitalize("test text")).toBe("Test Text");
  });
  test("should return same string", () => {
    expect(textCapitalize("")).toBe("");
  });
});

describe("chunkArray()", () => {
  test("should create chunk of array", () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toMatchObject([
      [1, 2],
      [3, 4],
    ]);
  });
});

describe("isURLValid()", () => {
  test("should be valid url", () => {
    expect(isURLValid("http://test.com")).toBe(true);
  });

  test("should be invalid url", () => {
    expect(isURLValid("test.com")).toBe(false);
  });
});

describe("isObjectEmpty()", () => {
  test("should be a empty object", () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  test("should not be a empty object", () => {
    expect(isObjectEmpty({ a: 1 })).toBe(false);
  });
});

describe("formatBytes()", () => {
  test("should format KB byte", () => {
    expect(formatBytes(1024)).toBe("1 KB");
  });
  test("should format KB byte", () => {
    expect(formatBytes(1024, -1)).toBe("1 KB");
  });
  test("should not format byte", () => {
    expect(formatBytes(0)).toBe("0");
  });
});

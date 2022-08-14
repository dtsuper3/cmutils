//  eslint-disable  @typescript-eslint/no-explicit-any
/**
 * Check if string is numeric or not
 * @param  {string} str
 * @returns {boolean}
 */
function isNumeric(str: string): boolean {
  if (isNaN(str as any)) {
    return false;
  }
  return true;
}

/**
 * Check if email is valid or not
 * @param  {string} email
 * @returns {boolean}
 */
function isEmailValid(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Check if password is strong or not
 * @param  {string} pwd
 * @returns {boolean}
 */
function isPasswordStrong(pwd: string): boolean {
  // const expression = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
  const expression = /^(?=.*\d)(?=.*[!@#$%^&*;])(?=.*[a-z])(?=.*[A-Z]).{8,25}$/;
  return expression.test(String(pwd));
}

/**
 * It parses query string
 * @param {string}
 * @returns {object}
 */

function parseQueryString(queryStr: string | undefined | null): any {
  const parsed: any = {};
  if (queryStr === undefined || queryStr === null) {
    return parsed;
  }
  if (queryStr != "") {
    queryStr = queryStr.substring(queryStr.indexOf("?") + 1);
    const p1 = queryStr.split("&");
    p1.forEach((value) => {
      const params = value.split("=");
      parsed[params[0]] = params[1];
    });
  }
  return parsed;
}

/**
 * Make First letter of string Capitalize
 * @param  {string} text
 * @returns {string}
 */
function stringCapitalize(text: string): string {
  if (typeof text === "string" && text.length > 0) {
    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
  }
  return text;
}

/**
 * Make First letter of each string in text Capitalize
 * @param  {string} text
 * @returns {string}
 */
function textCapitalize(text: string): string {
  if (typeof text === "string" && text.length > 0) {
    return text
      .split(" ")
      .map((i) => i.slice(0, 1).toUpperCase() + i.slice(1, i.length))
      .join(" ");
  }
  return text;
}

/**
 * Make chunk of array
 * @param  {Array} arr
 * @returns {Array}
 */
function chunkArray<T>(arr: T[], len: number): T[][] {
  const chunks = [];
  const n = arr.length;
  let i = 0;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}

/**
 * Check if url is valid or not
 * @param  {string} str
 * @returns {boolean}
 */
function isURLValid(str: string): boolean {
  const RE =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  return RE.test(str);
}

/**
 * Check if object is empty or not
 * @param  {string} str
 * @returns {boolean}
 */
function isObjectEmpty<T>(obj: T): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Format byte size
 * @param  {bytes} number
 * @returns {boolean}
 */
function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) {
    return "0";
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export {
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
};

/**
 * Copy item to clipboard
 * @param  {string} text
 */
const copyToClipboard = async (text: string): Promise<any> => {
  try {
    const toCopy = text;
    return await navigator.clipboard.writeText(toCopy);
  } catch (err) {
    console.error('Failed to copy: ', err);
    return err;
  }
};

/**
 * Check if phone no. of valid line or not
 * @param  {string} phone
 * @returns {boolean}
 */
const isPhoneNoValid = (phone: string): boolean => {
  const exp = /^[0-9]{6,16}$/;
  return exp.test(String(phone));
};

/**
 * Check if string is numeric or not
 * @param  {string} str
 * @returns {boolean}
 */
const isNumeric = (str: string): boolean => {
  const exp = /^[0-9]{1,16}$/;
  return exp.test(String(str));
};

/**
 * Check if email is valid or not
 * @param  {string} email
 * @returns {boolean}
 */
const isEmailValid = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Check if password is strong or not
 * @param  {string} pwd
 * @returns {boolean}
 */
const isPasswordStrong = (pwd: string) => {
  // const expression = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
  const expression = /^(?=.*\d)(?=.*[!@#$%^&*;])(?=.*[a-z])(?=.*[A-Z]).{8,25}$/;
  return expression.test(String(pwd));
};

/**
 * Set key value pair item into Local Storage
 * @param  {string} key
 * @param  {string} item
 */
const setItemInLocalStorage = (key: string, item: string): void =>
  localStorage.setItem(key, item);

/**
 * Get item from Local Storage based on key
 * @param  {string} key
 * @returns {any}
 */
const getItemFromLocalStorage = (key: string): any => {
  const data = localStorage.getItem(key);
  if (data && data !== undefined && data !== null) {
    return data;
  }
  return undefined;
};

/**
 * Clear item from Local Storage based on key
 * @param  {string} key
 */
const clearLocalStorageItemByKey = (key: string): void => {
  if (key) {
    localStorage.removeItem(key);
  }
};

/**
 * Clear all item from Local Storage
 */
const clearAllItemFromLocalStorage = (): void => {
  localStorage.clear();
};

/**
 * Scroll window screen to top of viewport
 */
const scrollToTop = (): void => window.scrollTo({ top: 0 });

/**
 * Make text Camel Case or Pascal Case
 * @param  {string} text
 * @returns {string}
 */
const makeTextCapitalize = (text: string): string => {
  if (typeof text === 'string' && text.length > 0) {
    return text
      .split(' ')
      .map((i) => i.slice(0, 1).toUpperCase() + i.slice(1, i.length))
      .join(' ');
  }
  return '';
};

/**
 * Parses JWT
 * @param  {string} token
 * @returns {(any|undefined)}
 */
const parseJwt = (token: string): any | undefined => {
  if (token !== undefined) {
    const base64Url = token.split('.')[1];
    if (base64Url !== undefined) {
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );

      return JSON.parse(jsonPayload);
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

/**
 * Only numeric value allowed
 * @param  {any} event
 * @returns {boolean}
 */
const inputNumberOnlyValidation = (event: any): boolean => {
  if (event === undefined || event === null) {
    return false;
  }
  const key = event.keyCode;
  if (key > 31 && (key < 48 || key > 57)) {
    return false;
  }
  return true;
};

/**
 * Check URL valid or not
 * @param  {string} text
 * @returns {boolean}
 */
const isURLValid = (text: string): boolean => {
  const RE = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  if (text) {
    return RE.test(text);
  }
  return false;
};

/**
 * Check if str has white spaces or not
 * @param  {string} str
 * @returns {boolean}
 */
const hasWhiteSpace = (str: string): boolean => {
  return !str.match(/\w/);
};

/**
 * Format decimal precision
 * @param  {number} number
 * @param  {number} decimal_precision
 * @returns {number}
 */
const numberDecimalPrecision = (
  number: number,
  decimal_precision: number
): number => {
  return parseFloat(number.toFixed(decimal_precision));
};

/**
 * @param  {number} unixTimestamp
 * @returns {number} human readable date time string
 */
const unixToReadableFormatDate = (unixTimestamp: number): string => {
  return new Date(unixTimestamp).toLocaleDateString();
};

const chunkArray = (arr: any[], len: number) => {
  const chunks = [],
    n = arr.length;
  let i = 0;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
};

const formatDateTime = (timeStamp: number, onlyDate = false): string => {
  const d = new Date(timeStamp);
  let dateTimeString =
    ('0' + d.getDate()).slice(-2) +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    d.getFullYear() +
    ' ';
  if (onlyDate) {
    return dateTimeString;
  }
  dateTimeString +=
    ('0' + d.getHours()).slice(-2) +
    ':' +
    ('0' + d.getMinutes()).slice(-2) +
    ':' +
    ('0' + d.getSeconds()).slice(-2);
  return dateTimeString;
};

// const currencyFormatter = (value: string | number, currency: string | undefined = undefined, minimumFractionDigits: number = 4) => {
//     if (value === undefined && value === null) {
//         return 0.0000
//     }
//     // return Intl.NumberFormat('en-IN', { ...(currency !== undefined ? { style: 'currency', currency: currency } : {}), minimumFractionDigits: minimumFractionDigits, }).format(value as number);
//     return Intl.NumberFormat('en-IN', { ...(currency !== undefined ? { style: 'currency', currency: currency } : {}) }).format(value as number);
// }

const formatCurrency = (num: number): string => {
  if (
    isNaN(num) ||
    num === undefined ||
    num === null ||
    typeof num === 'undefined'
  ) {
    // throw new Error(`currencyFormatter Failed,not a NUM`)
    // console.log("Num:-", num)
    return '';
  }
  // console.log("Num:-", num)
  const str = num.toString();
  let lastComma = 0;
  const lastDot = str.lastIndexOf('.');
  if (lastDot == -1) {
    lastComma = str.length - 4;
  } else {
    lastComma = lastDot - 4;
  }

  // console.log(lastComma);
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (i == lastComma) {
      newStr = ',' + newStr;
      lastComma -= 2;
    }

    newStr = str[i] + newStr;
  }
  return newStr;
};

const isObjectEmpty = (obj: any): boolean => {
  return Object.keys(obj).length === 0;
};

const sanitizeString = (str: string): string => {
  return str ? str.trim() : '';
};

const queryStringParse = (string: string): any => {
  const parsed: any = {};
  if (string != '') {
    string = string.substring(string.indexOf('?') + 1);
    const p1 = string.split('&');
    p1.map((value) => {
      const params = value.split('=');
      parsed[params[0]] = params[1];
    });
  }
  return parsed;
};

const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const isValidPrecisionFloat = (value: string, precision: number): boolean => {
  // console.log({ precision });
  const num = parseFloat(value);

  if (value === '') return true;

  if (isNaN(num)) {
    return false;
  }

  if (num < 0) {
    return false;
  }

  const lastIndex = value.lastIndexOf('.');
  if (lastIndex == -1) {
    return true;
  }

  const decimalLength = value.length - lastIndex - 1;
  return decimalLength <= precision;
};

const setItemInSessionStorage = (key: string, item: string): void =>
  sessionStorage.setItem(key, item);

const getItemFromSessionStorage = (key: string): string | null => {
  const data = sessionStorage.getItem(key);
  if (data !== undefined && data !== null && data) {
    return data;
  }
  return null;
};

const clearSessionStorageByKey = (key: string): void => {
  if (key) {
    sessionStorage.removeItem(key);
  }
};

const clearAllItemSessionStorage = () => {
  sessionStorage.clear();
};

const getMediumDimensionImage = (str: string, size: number) => {
  const splitImg = str.split('/');
  const img = splitImg.pop();
  const dim = splitImg.pop();
  // console.log(splitImg, img,dim )
  if (dim && !isNaN(parseInt(dim))) {
    return `${splitImg.join('/')}/${size}/${img}`;
  }
  return str;
  // str.split("/").map(item => isNaN(parseInt(item)) ? item : size).join("");
};

export {
  copyToClipboard,
  parseJwt,
  isEmailValid,
  getItemFromLocalStorage,
  setItemInLocalStorage,
  inputNumberOnlyValidation,
  makeTextCapitalize,
  scrollToTop,
  isPhoneNoValid,
  isURLValid,
  isPasswordStrong,
  isNumeric,
  clearLocalStorageItemByKey,
  clearAllItemFromLocalStorage,
  hasWhiteSpace,
  numberDecimalPrecision,
  unixToReadableFormatDate,
  chunkArray,
  formatDateTime,
  formatCurrency,
  isObjectEmpty,
  sanitizeString,
  queryStringParse,
  formatBytes,
  isValidPrecisionFloat,
  setItemInSessionStorage,
  getItemFromSessionStorage,
  clearSessionStorageByKey,
  clearAllItemSessionStorage,
  getMediumDimensionImage
};

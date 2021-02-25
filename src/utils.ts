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
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export { isNumeric, isEmailValid };

// /**
//  * Check if password is strong or not
//  * @param  {string} pwd
//  * @returns {boolean}
//  */
// function isPasswordStrong(pwd: string) {
//     // const expression = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
//     const expression = /^(?=.*\d)(?=.*[!@#$%^&*;])(?=.*[a-z])(?=.*[A-Z]).{8,25}$/;
//     return expression.test(String(pwd));
// };

// /**
//  * Scroll window screen to top of viewport
//  */
// function scrollToTop(): void {
//     if (window) {
//         window.scrollTo({ top: 0 });
//     }
// }

// /**
//  * Make text Camel Case or Pascal Case
//  * @param  {string} text
//  * @returns {string}
//  */
// function makeTextCapitalize(text: string): string {
//     if (typeof text === 'string' && text.length > 0) {
//         return text
//             .split(' ')
//             .map((i) => i.slice(0, 1).toUpperCase() + i.slice(1, i.length))
//             .join(' ');
//     }
//     return '';
// };

// /**
//  * Parses JWT
//  * @param  {string} token
//  * @returns {(any|undefined)}
//  */
// function parseJwt(token: string): any | undefined {
//     if (token !== undefined) {
//         const base64Url = token.split('.')[1];
//         if (base64Url !== undefined) {
//             const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

//             const jsonPayload = decodeURIComponent(
//                 atob(base64)
//                     .split('')
//                     .map(function (c) {
//                         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//                     })
//                     .join('')
//             );

//             return JSON.parse(jsonPayload);
//         } else {
//             return undefined;
//         }
//     } else {
//         return undefined;
//     }
// };

// /**
//  * Only numeric value allowed
//  * @param  {any} event
//  * @returns {boolean}
//  */
// function inputNumberOnlyValidation(event: any): boolean {
//     if (event === undefined || event === null) {
//         return false;
//     }
//     const key = event.keyCode;
//     if (key > 31 && (key < 48 || key > 57)) {
//         return false;
//     }
//     return true;
// };

// /**
//  * Check URL valid or not
//  * @param  {string} text
//  * @returns {boolean}
//  */
// function isURLValid(text: string): boolean {
//     const RE = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
//     if (text) {
//         return RE.test(text);
//     }
//     return false;
// };

// /**
//  * Check if str has white spaces or not
//  * @param  {string} str
//  * @returns {boolean}
//  */
// function hasWhiteSpace(str: string): boolean {
//     return !str.match(/\w/);
// };

// /**
//  * Format decimal precision
//  * @param  {number} number
//  * @param  {number} decimal_precision
//  * @returns {number}
//  */
// function numberDecimalPrecision(
//     number: number,
//     decimal_precision: number
// ): number {
//     return parseFloat(number.toFixed(decimal_precision));
// };

// /**
//  * @param  {number} unixTimestamp
//  * @returns {number} human readable date time string
//  */
// function unixToReadableFormatDate(unixTimestamp: number): string {
//     return new Date(unixTimestamp).toLocaleDateString();
// };

// function chunkArray(arr: any[], len: number) {
//     const chunks = [],
//         n = arr.length;
//     let i = 0;
//     while (i < n) {
//         chunks.push(arr.slice(i, (i += len)));
//     }
//     return chunks;
// };

// function formatDateTime(timeStamp: number, onlyDate = false): string {
//     const d = new Date(timeStamp);
//     let dateTimeString =
//         ('0' + d.getDate()).slice(-2) +
//         '-' +
//         ('0' + (d.getMonth() + 1)).slice(-2) +
//         '-' +
//         d.getFullYear() +
//         ' ';
//     if (onlyDate) {
//         return dateTimeString;
//     }
//     dateTimeString +=
//         ('0' + d.getHours()).slice(-2) +
//         ':' +
//         ('0' + d.getMinutes()).slice(-2) +
//         ':' +
//         ('0' + d.getSeconds()).slice(-2);
//     return dateTimeString;
// };

// function formatCurrency(num: number): string {
//     if (
//         isNaN(num) ||
//         num === undefined ||
//         num === null ||
//         typeof num === 'undefined'
//     ) {
//         // throw new Error(`currencyFormatter Failed,not a NUM`)
//         // console.log("Num:-", num)
//         return '';
//     }
//     // console.log("Num:-", num)
//     const str = num.toString();
//     let lastComma = 0;
//     const lastDot = str.lastIndexOf('.');
//     if (lastDot == -1) {
//         lastComma = str.length - 4;
//     } else {
//         lastComma = lastDot - 4;
//     }

//     // console.log(lastComma);
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (i == lastComma) {
//             newStr = ',' + newStr;
//             lastComma -= 2;
//         }

//         newStr = str[i] + newStr;
//     }
//     return newStr;
// };

// function isObjectEmpty(obj: any): boolean {
//     return Object.keys(obj).length === 0;
// };

// function sanitizeString(str: string): string {
//     return str ? str.trim() : '';
// };

// function queryStringParse(string: string): any {
//     const parsed: any = {};
//     if (string != '') {
//         string = string.substring(string.indexOf('?') + 1);
//         const p1 = string.split('&');
//         p1.map((value) => {
//             const params = value.split('=');
//             parsed[params[0]] = params[1];
//         });
//     }
//     return parsed;
// };

// function formatBytes(bytes: number, decimals = 2): string {
//     if (bytes === 0) {
//         return '0 Bytes';
//     }

//     const k = 1024;
//     const dm = decimals < 0 ? 0 : decimals;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

//     const i = Math.floor(Math.log(bytes) / Math.log(k));

//     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
// };

// function isValidPrecisionFloat(value: string, precision: number): boolean {
//     // console.log({ precision });
//     const num = parseFloat(value);

//     if (value === '') return true;

//     if (isNaN(num)) {
//         return false;
//     }

//     if (num < 0) {
//         return false;
//     }

//     const lastIndex = value.lastIndexOf('.');
//     if (lastIndex == -1) {
//         return true;
//     }

//     const decimalLength = value.length - lastIndex - 1;
//     return decimalLength <= precision;
// };

// export {
//     copyToClipboard,
//     parseJwt,
//     isEmailValid,
//     inputNumberOnlyValidation,
//     makeTextCapitalize,
//     scrollToTop,
//     isPhoneNoValid,
//     isURLValid,
//     isPasswordStrong,
//     isNumeric,
//     hasWhiteSpace,
//     numberDecimalPrecision,
//     unixToReadableFormatDate,
//     chunkArray,
//     formatDateTime,
//     formatCurrency,
//     isObjectEmpty,
//     sanitizeString,
//     queryStringParse,
//     formatBytes,
//     isValidPrecisionFloat
// };

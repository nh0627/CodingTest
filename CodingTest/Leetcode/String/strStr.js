/**
 * Implement strStr(). (indexOf() in Java)
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (needle.length == 0) return 0;

    const needleSize = needle.length;

    for (let i = 0; i <= haystack.length - needleSize; i++) {
        const sub = haystack.substring(i, i + needleSize);
        if (sub === needle) return i;
    }

    return -1;
};
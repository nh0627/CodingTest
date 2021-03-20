/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        const currLetter = s[i];
        const matchIdx = s.length - 1 - i;
        const matchLetter = s[matchIdx];
        s[i] = matchLetter;
        s[matchIdx] = currLetter;
    }
};
/**
 * Given a string, find the first non-repeating character in it and return its index. 
 * If it doesn't exist, return -1.
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const hash = {};
    let answer = -1;
    const sArr = s.split("");

    sArr.forEach(letter => {
        if (typeof hash[letter] === "undefined") hash[letter] = 0;
        ++hash[letter];
    });

    answer = sArr.findIndex(letter => hash[letter] === 1);

    return answer;
};
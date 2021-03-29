/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * https://leetcode.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const hash = {};
    let result = false;

    for (const num of nums) {
        if (typeof hash[num] === "undefined") {
            hash[num] = 0;
        }

        ++hash[num];

        if (hash[num] > 1) {
            result = true;
            break;
        }
    }
    return result;
};
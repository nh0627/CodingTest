/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * https://leetcode.com/problems/single-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let answer = 0;
    const hash = {};

    for (const num of nums) {
        if (typeof hash[num] === "undefined") hash[num] = 0;
        ++hash[num];
    }

    const helper = Object.keys(hash);

    answer = helper.filter(num => hash[num] === 1);

    return answer;
};
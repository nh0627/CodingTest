/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * https://leetcode.com/problems/rotate-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    const calculatedK = k % nums.length;
    const lastIdx = Math.abs(nums.length - calculatedK);
    const temp = nums.splice(0, lastIdx);
    nums.push(...temp);
};
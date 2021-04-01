/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 * https://leetcode.com/problems/maximum-subarray/
 */

// Dynamic programming solution
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {

    const memo = [nums[0]];
    let currMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const subMax = Math.max(memo[i - 1] + nums[i], nums[i]);
        memo.push(subMax);
        currMax = Math.max(subMax, currMax);
    }

    return currMax;
};
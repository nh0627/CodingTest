/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * https://leetcode.com/problems/move-zeroes/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {

    const zeroArr = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 0) {
            nums.splice(i, 1);
            --i;
            zeroArr.push(0);
        }
    }
    nums.push(...zeroArr);
};
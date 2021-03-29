/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {

    const answer = [];
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hash[target - num] !== undefined) {
            answer.push(hash[target - num], i);
            break;
        } else {
            hash[num] = i;
        }
    }

    return answer;
};
/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

const findDisappearedNumbers = (nums) => {
    const hashSet = new Set();
    const answer = [];
    for (let num of nums) {
        hashSet.add(num);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!hashSet.has(i)) answer.push(i);
    }
    return answer;
};

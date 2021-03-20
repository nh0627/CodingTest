/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const answer = [];

    for (const num of nums1) {
        const num2Index = nums2.indexOf(num);
        if (num2Index >= 0) {
            answer.push(num);
            nums2.splice(num2Index, 1);
        }
    }

    return answer;
};
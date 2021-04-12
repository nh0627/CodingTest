/**
 * You are given two linked lists: list1 and list2 of sizes n and m respectively.
 * Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
 * https://leetcode.com/problems/merge-in-between-linked-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {

    const senitel = { val: -1, next: null };
    let count = 0;
    let curr = senitel;
    curr.next = list1;

    while (count <= b || curr.next) {

        if (count < a) {
            curr.next = list1;
        } else if (count === a) {
            curr.next = list2;
        }

        if (count <= b) list1 = list1.next;
        if (curr.next) curr = curr.next;
        ++count;
    }

    curr.next = list1;

    return senitel.next;
};
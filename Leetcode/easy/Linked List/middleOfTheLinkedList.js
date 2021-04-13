/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * If there are two middle nodes, return the second middle node.
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {

    let length = 0;
    let mid = 0;
    let count = 0;
    let curr = head;

    while (curr.next) {
        ++length;
        curr = curr.next;
    }

    mid = parseInt(length / 2);
    mid = (length % 2 === 0) ? mid : ++mid;
    curr = head;

    while (count < mid) {
        ++count;
        curr = curr.next;
    }

    return curr;
};
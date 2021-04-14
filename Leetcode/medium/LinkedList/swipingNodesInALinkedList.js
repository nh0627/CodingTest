/**
 * You are given the head of a linked list, and an integer k.
 * Return the head of the linked list after swapping the values of the kth node 
 * from the beginning and the kth node from the end (the list is 1-indexed).
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {

    let node1 = head;
    let node2 = head;
    let kth, temp;

    for (let i = 0; i < k - 1; i++) {
        node1 = node1.next;
    }

    kth = node1;
    node1 = node1.next;

    while (node1) {
        node1 = node1.next;
        node2 = node2.next;
    }

    temp = kth.val;
    kth.val = node2.val;
    node2.val = temp;

    return head;
};
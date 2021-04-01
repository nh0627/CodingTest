
/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * https://leetcode.com/problems/reverse-linked-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head === null && head.next === null) return head;

    let node1 = head;
    let node2 = node1.next;
    head.next = null;

    while (node1 !== null && node2 !== null) {
        let temp = node2.next;
        node2.next = node1;
        node1 = node2;
        node2 = temp;
    }

    return node1;
};
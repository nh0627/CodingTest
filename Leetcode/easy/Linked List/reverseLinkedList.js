
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
    
    let curr = head;
    let prev = curr.next;
    head.next = null;
    
    while (prev !== null && curr !== null) {
        const temp = prev.next;
        prev.next = curr;
        curr = prev;
        prev = temp;
    }
    
    return curr;
};
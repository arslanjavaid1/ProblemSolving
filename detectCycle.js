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
 var detectCycle = function(head) {
    if(!head) return null;
    let fast = head;
    let slow = head;
    let isCycle = false;
    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            isCycle = true
            break;
        }
    }
    if(!isCycle) return null;
    slow = head;
    while(slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
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
var reverseKGroup = function(head, k) {
    let curr = head;
    let count = 0;
    while(curr !== null && count !== k) {
        curr = curr.next;
        count++;
    }
    if(count ===k) {
        curr = reverseKGroup(curr, k);
        while(count-- > 0) {
            let tmp = head.next;
            head.next = curr;
            curr = head;
            head = tmp;
        }
        head = curr
    }
    return head;
};

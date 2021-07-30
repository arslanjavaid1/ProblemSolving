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

 var swapPairs = function(head) {
    if(!head || !head.next)
        return head
    
    let first=head
    let second=head.next
    if(!second.next){
        second.next=first
        first.next=null
        return second
    }
    else {
        let third = second.next
        second.next=first
        first.next=swapPairs(third)
        return second
        
    }
};
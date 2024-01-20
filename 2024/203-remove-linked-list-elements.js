//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return head;
    let l1 = new ListNode();
    let l2 = l1;
    while(head !== null) {
        if(head.val !== val) {
            l2.next = new ListNode(head.val);
            l2 = l2.next;
        }
        head = head.next;
    }
    return l1.next;

};


let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

console.log(removeElements(l1, 4))
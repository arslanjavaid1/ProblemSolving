/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null && l2 === null) return l1;
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let l3 = new ListNode(0);
    let s = l3;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            s.next = new ListNode(l1.val)
            l1 = l1.next;
        } else {
            s.next = new ListNode(l2.val)
            l2 = l2.next;
        }
        s = s.next;
    }
    while(l1 !== null) {
        s.next = new ListNode(l1.val);
        l1 = l1.next;
        s = s.next;
    }
    while(l2 !== null) {
        s.next = new ListNode(l2.val);
        l2 = l2.next;
        s = s.next;
    }
    return l3.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
console.log(mergeTwoLists(l1, l2));

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (l1 === null && l2 === null) return l1;
    let stack1 = [], stack2 = [];
    let carry = 0;
    let n = new ListNode(0);
    let s = n;
    while (l1 !== null || l2 !== null) {
        l1 !== null ? stack1.push(l1.val) : 0;
        l2 !== null ? stack2.push(l2.val) : 0;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    let result = [];
    while (stack1.length !==0  || stack2.length !== 0) {
        let x = stack1.length !== 0 ? stack1.pop() : 0;
        let y = stack2.length !== 0 ? stack2.pop() : 0;
        let sum = carry + x + y;
        carry = Math.trunc(sum / 10);
        result.push(sum % 10);
    }
    if(carry > 0)
        result.push(carry)
    while(result.length !== 0) {
        s.next = new ListNode(result.pop());
        s = s.next;
    }
    return n.next
}
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2))
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
 function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if(!head) return head;
};

const head = new Node(7, null, null);
head.next = new Node(13);
head.next.random = head;
head.next.next = new Node(11);
head.next.random = new Node(11);
head.next.next.next = new Node(10);
head.next.next.next.next = new Node(1);
head.next.next.random = head.next.next.next.next;
head.next.next.next.next.random = head;
head.next.next.next.random = head.next.next;
console.log(head)
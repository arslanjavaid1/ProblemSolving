class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

function containsCycle(firstNode) {
    const set = new Set();
    set.add(firstNode);
    next = firstNode.next;
    while(next)
    {    
        if(set.has(next))
            return true;
        set.add(next)    
        next = next.next;
    }
    return false;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  while(fast !== null && fast.next != null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  if(slow === fast)  return true;
  }
  return false;
};

let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
nodes[3].next = nodes[0];

console.log(containsCycle(nodes[0]));

function valuesToLinkedListNodes(values) {
    const nodes = [];
    for (let i = 0; i < values.length; i++) {
      const node = new LinkedListNode(values[i]);
      if (i > 0) {
        nodes[i - 1].next = node;
      }
      nodes.push(node);
    }
    return nodes;
  }
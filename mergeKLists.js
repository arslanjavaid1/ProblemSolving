/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 23. Merge k Sorted Lists
 */

 const merge = (l1, l2) => {
    if(!l1 && !l2) {
        return l1;
    }
    if(!l2) {
        return l1;
    }
    if(!l1) {
        return l2;
    }
    const head = l1.val < l2.val ? l1 : l2;
    l2 = l1.val < l2.val ? l2 : l1;
    l1 = head;
    while(l1.next && l2) {
          if(l2.val <= l1.next.val) {
              const temp = l1.next;
              l1.next = l2;
              l2 = l2.next;
              l1.next.next = temp;
              l1 = l1.next;
          } else {
              l1 = l1.next;
          }
    }
    if(l2) {
        l1.next = l2;
    }
    return head;
};
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) {
        return null;
    }

    let interval = 1;
    
    while(interval < lists.length) {
        for(let start = 0; (start + interval) < lists.length; start = start + interval * 2) {
            lists[start] = merge(lists[start], lists[start + interval]);
        }
        interval *= 2;
    }
    return lists[0];
};
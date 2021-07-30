/*
1st case: given value is the smallest
If next node < current value and insert value <= next node, our node is the smallest.
we can insert between current node and next node

2nd case: given value is the greatest
If next node < current value and insert value > current node, our node is the greatest.
we can insert between current node and next node

3rd case:
every node has the same value. We can figure this out by checking if we've inserted node
when we make one full circle. If we didn't insert yet, that means every node is the same.
Hence, we can insert it anywhere.

general case:
if next node >= insert value and current node < insert value,
we can insert between current node and next node
*/
var insert = function(head, insertVal) {
    let newNode = new Node(insertVal, null);
    if (!head) {
        newNode.next = newNode;
        return newNode;
    }
    let inserted = false;
    let cur = head;
    while (!inserted) {
        let curVal = cur.val, nextVal = cur.next.val;
        if ((curVal > nextVal && insertVal <= nextVal) // minimum
            || (curVal > nextVal && insertVal > curVal ) // maximum
            || (insertVal > curVal && insertVal <= nextVal) // general
           ) {
            newNode.next = cur.next;
            cur.next = newNode;
            inserted = true;
        }
        cur = cur.next;
        // we've made a full circle
        if (!inserted && cur === head) {
            newNode.next = cur.next;
            cur.next = newNode;
            inserted = true;
        }
    }
    return head;
    // T.C: O(N)
    // S.C: O(1)
};
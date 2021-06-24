/**
 * Initialize your data structure here.
 */
var node = function(val) {
    return {
    val : val,
    next : null
    }
}
var head = node();
var MyLinkedList = function() {

};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let start = 0;
    let newNode = head;
    while(start < index && newNode.next !== null) {
        newNode = newNode.next;
        start++;
    }
    return newNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    console.log(head);
        if(head.val !== undefined){
            let newNode =  node(val);
            newNode.val = val;
            newNode.next = head;
            console.log(newNode)
            head = newNode;
        } else {
            head.val = val;
        }
            console.log('head')
            console.log(head)
            console.log('Endhead')
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = head;
    while(head.next !== null) {
        head = head.next;
    }
    head.next = node(val);
    head = newNode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let length = 0;
    let newNode = head;
    while  (newNode.next != null) {
        newNode = newNode.next;
        length++;
    }
    let count = 0;
    let nNode = head;
    if(length >= index) {
        while(count < index && head.next !== null) {
            head = head.next;
        }
        
       let newN = node(val);
        newN.next = nNode.next;
        nNode.next = newN;
        head = nNode;
    } 
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let start = 0;
    let newNode = head;
    while(start < index && newNode.next !== null) {
        newNode = newNode.next;
        start++;
    }
        newNode.val = newNode.next && newNode.next.val ? newNode.next.val : null;
        newNode.next = newNode.next && newNode.next.next ?newNode.next.next : null;
        head = newNode; 
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
*/
var obj = new MyLinkedList()
 obj.addAtHead(7)
 obj.addAtTail(7)
 obj.addAtHead(9)
 obj.addAtTail(8)
 obj.addAtHead(6)
 obj.addAtHead(0)
console.log(obj.get(5));
debugger;
obj.addAtHead(0)
console.log(obj.get(2));
console.log(obj.get(5));
 obj.addAtTail(4)

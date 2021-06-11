class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
function deleteNode(nodeToDelete) {
while (nodeToDelete.next != null) {
    nodeToDelete = nodeToDelete.next;
}
console.log(nodeToDelete);
return nodeToDelete;
}

head = new LinkedListNode(1);
nodeToDelete = appendToList(head, 2);
appendToList(head, 3);
appendToList(head, 4);

deleteNode(nodeToDelete);
  
function appendToList(head, value) {
    let tail = head;
    while(tail.next) {
      tail = tail.next;
    }
    tail.next = new LinkedListNode(value);
    return tail.next;
  }
  
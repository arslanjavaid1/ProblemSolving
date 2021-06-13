class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverse(headOfList) {
    if(!headOfList)
        return headOfList;  
        if(!headOfList.next)
            return headOfList;
        let current = headOfList;
        let previous = null;
        let next = null
        while(current){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        return previous;
        
  }
  let nodes = valuesToLinkedListNodes([1, 2]);
  let reversedList = reverse(nodes[0]);
  console.log(reversedList);
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
      
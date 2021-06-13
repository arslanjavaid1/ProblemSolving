class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function kthToLastNode(k, head) {
    if (k == 0)
        throw new Error();
    if (k > head.length)
        throw new Error();
    let main = head;
    let current = head;
    let count = 0;
    while(current)
    {
        current = current.next;
        count++;
    }
    if(k == count) return main;
    if(k > count) throw new Error();
    let final = count - 1 - k;
    count = 0;
    while(count !=final && main && main.next)
    {
        main = main.next;
        count ++;
    }
    return main.next;
}

let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
let actual = kthToLastNode(1, nodes[0]);
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(2, nodes[0]);
console.log(actual)
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
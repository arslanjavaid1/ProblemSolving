 function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };
var connect = function(root) {
    if(!root)
        return null;
    if(root.left && root.right) {
     root.left.next = root?.right
     root.right.next = root?.next?.left
    }
    let left = connect(root.left);
    let right = connect(root.right);
    return root;
};

const levelOrderTraversal = (root, noden) => {
    if(!root)
        return null;
    let q = new Queue();
    q.enqueue(root);
    let visited = [];
    while(q !== null) {
        n = q.dequeue();
        if(n.left === null) {
            n.left = noden;
            break;
        } else {
            q.enqueue(n.left)
        }
        if(n.right === null) {
            n.right = noden;
            break;
        } else {
            q.enqueue(n.right)
        }
        if(!visited.includes(root)) {
            visited.push(root);
        }
    } 
    return root;   
}
const deleteANode = (root, noden) => {
    if(!root)
        return null;
        let right = root;
    while(right) {
        right = right.right;
    }

 let q = new Queue();
    q.enqueue(root);
    let visited = [];
    if(root === noden) {
        root = right;
        return root;
    }
    while(q !== null) {
        n = q.dequeue();
        if(n.left === noden) {
            n.left = right;
            break;
        } else {
            q.enqueue(n.left)
        }
        if(n.right === noden) {
            n.right = right;
            break;
        } else {
            q.enqueue(n.right)
        }
        if(!visited.includes(root)) {
            visited.push(root);
        }
    } 
    return root;   
}}
var root = new Node(10);
root.left = 11;
root.right = 9;
root.left.left = 7
root.left.right = null
root.right.left =15;
root.right.right =8;
var noden = new Node(12);
console.log(JSON.stringify(levelOrderTraversal(root, noden)));
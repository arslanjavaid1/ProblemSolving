const Node = function (val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
const perfectBinaryTreeSpecificLevelTraversal = (root) => {
    if (!root)
        return null;
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    let final = [];
    console.log(root.val);
    console.log(root.left.val);
    console.log(root.right.val);
    while(queue !== null) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        if(node1 && node2){
            console.log(node1.left.val)
            console.log(node2.right.val);
            console.log(node1.right.val);
            console.log(node2.left.val);
        }
            if(node1?.left?.left !== null) {
                queue.push(node1.left);
                queue.push(node2.right);
                queue.push(node1.right);    
                queue.push(node2.left);    
            }
    }
    return final;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.left = new Node(10);
root.left.right.right = new Node(11);
root.right.left.left = new Node(12);
root.right.left.right = new Node(13);
root.right.right.left = new Node(14);
root.right.right.right = new Node(15);

root.left.left.left.left = new Node(16);
root.left.left.left.right = new Node(17);

root.left.left.right.left = new Node(18);
root.left.left.right.right = new Node(19);

root.left.right.left.left = new Node(20);
root.left.right.left.right = new Node(21);

root.left.right.right.left = new Node(22);
root.left.right.right.right = new Node(23);

root.right.left.left.left = new Node(24);
root.right.left.left.right = new Node(25);

root.right.left.right.left = new Node(26);
root.right.left.right.right = new Node(27);

root.right.right.left.left = new Node(28);
root.right.right.left.right = new Node(29);

root.right.right.right.left = new Node(30);
root.right.right.right.right = new Node(31);


console.log(perfectBinaryTreeSpecificLevelTraversal(root))
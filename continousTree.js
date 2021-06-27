function Node(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
};
const contineousTree = (root, parent = null) => {
    if (!root)
        return false;
        return contineousTreeresursive(root, {val: root.val + 1})   
}
const contineousTreeresursive = (root, parent ) => {
    if (!root)
        return true;
    if(root.left) left = contineousTreeresursive(root.left, root);
    if(root.right)right = contineousTreeresursive(root.right, root);
    if(Math.abs(root.val - parent.val) === 1 && contineousTreeresursive(root.left, root) && contineousTreeresursive(root.right, root))
        return true;
    else
    return false;
}

let root = new Node(3);
root.left = new Node(2);
root.right = new Node(4);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.right = new Node(5);
root = new Node(7);
root.left = new Node(5);
root.right = new Node(8);
root.left.left = new Node(6);
root.left.right = new Node(4);
root.right.right = new Node(10);

console.log(contineousTree(root))
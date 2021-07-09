function Node(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
};
const mirror = (root) => {
    if (!root)
        return true;
        return isMirror(root, root);
}
const isMirror = (t1, t2) => {
    if(t1 === null && t2 === null)
        return true;
    if(t1 === null || t2 === null)
        return false;
    return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t2.left, t1.right);
}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.right = new Node(3);
// root.left.right = new Node(4);
// root.right.left = new Node(4);
root.right.right = new Node(3);

console.log(mirror(root))
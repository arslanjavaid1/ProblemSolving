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

const levelOrderTraversal = (root, parent) => {

}
var root = new Node(1);
root.left = 2;
root.right = 3;
root.left.left = 4
root.left.right = 5
root.right.left =6;
root.right.right =7;
console.log(connect(root));
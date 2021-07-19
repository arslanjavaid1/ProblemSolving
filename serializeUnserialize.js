
function TreeNode(val) {
     this.val = val;
   this.left = this.right = null;
 }
 

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */ 

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(6);
root.right.left.right = new TreeNode(7);

console.log(deserialize(serialize(root)));
 
class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left  = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }
  let maxDepth;
  let minHeight;
  function isBalanced(treeRoot) {
    maxDepth = 0;
    minHeight = Number.MAX_VALUE;
  
    dfs(treeRoot, 0);
    if(maxDepth - minHeight > 1 )
        return false;
    return true;
  }
  function dfs (T, height) {
    if(T.left == null && T.right == null){
        minHeight = Math.min(minHeight, height);
        maxDepth = Math.max(maxDepth, height);
    }
    if(T.left != null) dfs(T.left, height + 1);
    if(T.right != null) dfs(T.right, height + 1);
    return {maxDepth, minHeight};
}
  
  
  
  let treeRoot = new BinaryTreeNode(5);
  let leftNode = treeRoot.insertLeft(8);
  leftNode.insertLeft(1);
  leftNode.insertRight(2);
  let rightNode = treeRoot.insertRight(6);
  rightNode.insertLeft(3);
  rightNode.insertRight(4);
  treeRoot = new BinaryTreeNode(6);
  leftNode = treeRoot.insertLeft(1);
  rightNode = treeRoot.insertRight(0);
  rightNode.insertRight(7).insertRight(8);

// treeRoot = new BinaryTreeNode(1);
// leftNode = treeRoot.insertLeft(5);
// rightNode = treeRoot.insertRight(9);
// rightNode.insertLeft(8);
// rightNode.insertRight(5);
console.log(isBalanced(treeRoot));  
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
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
function findSecondLargest(treeRoot) {
    if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
        throw new Error('Tree must have at least 2 nodes');
      }
    let current = treeRoot;
    while(current) {
        if(current.left && !current.right) {
            return findLargest(current.left);
        }
        if(current.right && !current.right.right && !current.right.left)
            return current.value;

        current = current.right;
    }
}
function findLargest (t) {
    let current = t;
    while(current) {
        if( ! current.right) return current.value;
        current = current.right;
    }
}

let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
console.log(findSecondLargest(treeRoot));
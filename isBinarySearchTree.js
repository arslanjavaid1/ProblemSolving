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

function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
    if (!treeRoot)
        return true;
    lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
    upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;
    if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound)
        return false
    return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}

let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);

// treeRoot = new BinaryTreeNode(50);
// leftNode = treeRoot.insertLeft(30);
// leftNode.insertLeft(20);
// leftNode.insertRight(60);
// rightNode = treeRoot.insertRight(80);
// rightNode.insertLeft(70);
// rightNode.insertRight(90);

console.log(isBinarySearchTree(treeRoot));
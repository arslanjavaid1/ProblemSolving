//545. Boundary of Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var boundaryOfBinaryTree = function (root) {
    if (!root) return [];

    let resList = [];
    resList.push(root.val);

    leftBoundary(root.left);
    leaves(root.left);
    leaves(root.right);
    rightBoundary(root.right);

    return resList;

    function leftBoundary(root) {
        if (!root || (!root.left && !root.right)) return;

        resList.push(root.val);
        if (root.left) {
            leftBoundary(root.left);
        } else {
            leftBoundary(root.right);
        }
    }

    function rightBoundary(root) {
        if (!root || (!root.left && !root.right)) return;

        //the right boundary order should be from bottom to top;
        if (root.right) {
            rightBoundary(root.right);
        } else {
            rightBoundary(root.left);
        }
        resList.push(root.val);
    }

    function leaves(root) {
        if (!root) return;

        if (!root.left && !root.right) {
            resList.push(root.val);
            return;
        }
        leaves(root.left);
        leaves(root.right);
    }
};

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(4);
console.log(boundaryOfBinaryTree(root))

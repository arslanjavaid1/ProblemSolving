/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let res;
var pathSum = function (root, targetSum) {
    if (!root) return [];
    res = [];
    pathSum_(root, res, targetSum);
    return res;
};
const pathSum_ = (root, res, target, pathToSum = []) => {
    if(!root) return;
    pathToSum.push(root.val);
    if (root && !root.left && !root.right && target === root.val) {
        res.push([...pathToSum]);
    }
    if(root.left) {
        pathSum_(root.left, res, target - root.val, pathToSum);
    }
    if (root.right)  pathSum_(root.right, res, target - root.val, pathToSum);
    pathToSum.pop();
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);
root.right.left = new TreeNode(13);
target = 22
console.log(pathSum(root, target));

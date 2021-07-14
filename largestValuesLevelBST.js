
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var largestValues = function(root) {
    if (!root) return [];
    const rightview = [];
    levelOrderTraversal(root, rightview, 0);
    return rightview.map(l=> Math.max(...l));
};
const levelOrderTraversal = (root, result,level) => {
    if (!root)
        return;
    if (!result[level]) result[level] = []; 
    result[level].push(root.val);
    levelOrderTraversal(root.left, result, level + 1);
    levelOrderTraversal(root.right,result, level + 1);
}

[1, 2, 3, null, 5, null, 4]
let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9)

console.log(largestValues(root));
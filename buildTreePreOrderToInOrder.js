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

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }
    return build( 0, preorder.length - 1, map, preorder, inorder);
};

const build = (left, right, map, preorder, inOrder) => {
    if(left > right) return null;
    let rootVal = preorder.shift();
    let root = new TreeNode(rootVal);
    if(preorder.length > 0) {
        root.left = build(left, map[rootVal] - 1, map, preorder, inOrder);
        root.right = build(map[rootVal] + 1, right, map, preorder, inOrder);
    }
    return root;
}

let preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder))
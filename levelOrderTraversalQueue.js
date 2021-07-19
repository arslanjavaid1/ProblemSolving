/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function Node(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
    if (!root) return [];
    let q = [];
    q.push(root);
    let final = [];
    while (q.length) {
        let result = Array();
        let l = q.length;
        for (let i = 0; i < l; i++) {
            let node = q.shift();
            if (node.left !== null) {
                q.push(node.left);
            }
            if (node.right !== null) {
                q.push(node.right);
            }
            result.push(node.val);
        }
        final.push(result);
    }
    return final;
};


let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(levelOrder(root));
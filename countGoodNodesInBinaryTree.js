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
 * @return {number}
 */
 let count;
 var goodNodes = function(root) {
     count = 0;
     if(!root) return 0;
     good(root, -Infinity);
     return count;
 };
 
 const good = (root, max) => {
     if(!root) return;
     if(root.val >= max) {
         max = root.val;
         count++;
     }
     good(root.left, max);
     good(root.right, max);
     return;
     
 }
 
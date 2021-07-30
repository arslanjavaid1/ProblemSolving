/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
   return  createTree(nums, 0, nums.length);
};

const createTree = (nums, start, end) => {
    if(start >= end) return;
    let mid = Math.floor(( start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = createTree(nums, start, mid) || null;
    root.right = createTree(nums, mid + 1, end) || null;
    return root;
}
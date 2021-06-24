var sortedArrayToBST = function (nums, start = 0, end = nums.length) {
    if (!nums)
        return null;
    if (nums.length == 1)
        return new TreeNode(nums[0], null, null);
    if(start >= end) {
        const mid = Math.floor(start + ( end - start) / 2);
        return new TreeNode(nums[mid], sortedArrayToBST(nums, start,mid), sortedArrayToBST(nums, mid + 1, end));
    }
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
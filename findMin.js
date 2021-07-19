/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 0)
        return -1;
    if (nums.length === 1)
        return nums[0];
    let left = 0;
    let right = nums.length - 1;
    if (nums[0] < nums[right])
        return nums[0];
    while (right >= left) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        if (nums[mid] > nums[0])
            left = mid + 1;
        else right = mid - 1;
    }
    return -1;
};
let nums = [2,3,4,5,1];
console.log(findMin(nums));
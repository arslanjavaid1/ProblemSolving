/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
    const missingNum = (index) => {
        return nums[index] - nums[0] - index
    }
    let l = 0, h = nums.length;
    while (l < h) {
        let mid = Math.floor((l + h ) / 2);
        if (missingNum(mid) < k)
            l = mid + 1;
        else h = mid;
    }
    return nums[l - 1] + k - missingNum(l - 1);
};
let nums = [1, 2, 4], k = 3
console.log(missingElement(nums, k))
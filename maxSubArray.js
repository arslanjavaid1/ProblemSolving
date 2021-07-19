/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0) return 0;
    let n = nums.length;
    let dp = Array(n);
    dp[0] = nums[0];
    let max = dp[0];
    for (let i = 1; i < n; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(max, dp[i]);
    }
    return max;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));
/**
 * @param {number[]} nums
 * @return {number}
 * 740. Delete and Earn

 */
var deleteAndEarn = function (nums) {
    if (!nums) return 0;
    let dp = [];
    let bucket = [];
    for(let i = 0; i < nums.length; i++) bucket[nums[i]] = (bucket[nums[i]] || 0) + nums[i];
    console.log(bucket)
    dp[0] = bucket[0] || 0;
    dp[1] = bucket[1] || 0;
    console.log(dp)
    for (let i = 2; i < bucket.length; i++) {
        dp[i] = Math.max(dp[i - 2] + (bucket[i] || 0), dp[i - 1]);
    }
    return dp[dp.length - 1];
}
nums = [3, 4, 2];
console.log(deleteAndEarn(nums))
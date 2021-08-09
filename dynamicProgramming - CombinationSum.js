const combinationSum = (nums, n) => {
    let dp = Array(sum + 1).fill(0);
    dp[0] = 1;
    for(let i = 0; i < n; i++) {
        for(let x in nums) {
            dp[i] += dp[i - x];
    }
    return dp[sum]

}
let n = 4, nums = [1,2,3];
console.log(combinationSum(nums, n));
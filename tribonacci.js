/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n === 0) return 0;
    if(n<= 2) return 1;
    const dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }
    return dp[n]
};
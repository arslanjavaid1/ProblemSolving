/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let max = amount + 1;
    let dp = Array(max).fill(amount+1);
    dp[0] = 0;
    for(let i = 0; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            if(coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
let coins = [1,2,5], amount = 11
console.log(coinChange(coins, amount));
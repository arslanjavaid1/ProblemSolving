/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(!prices.length) return 0;
    const n = prices.length;
    let max = 0;
    for(let i = 1; i < n; i++) {
        if(prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1]
    }
    return max;
};
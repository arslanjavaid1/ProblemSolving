/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Infinity;
    if (prices.length === 0) return 0;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
    }
    return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
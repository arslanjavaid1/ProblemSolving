/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let dp = new Array(k + 2).fill(Number.POSITIVE_INFINITY).map(() => Array(n).fill(Number.POSITIVE_INFINITY));
    for(let i = 0 ; i <= k+1;i++) {
        dp[i][src] = 0;
    }
    for (let i = 1; i <= k + 1; i++) {
        for (flight of flights) {
            let u = flight[0];
            let v = flight[1];
            let p = flight[2];    
            if (dp[i - 1][u] !== Number.POSITIVE_INFINITY) {
                dp[i][v] = Math.min(dp[i][v], dp[i - 1][u] + p);
            }
        }
    }
    return dp[k+1][dst] === Number.NEGATIVE_INFINITY ? -1 : dp[k+1][dst];
};

let n = 3, flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k = 1;
n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
console.log(findCheapestPrice(n, flights, src, dst, k))

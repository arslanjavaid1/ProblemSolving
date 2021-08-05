/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length) return 0;
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = Array(m + 1).fill(0).map(()=> Array(n + 1).fill(0));
    let res = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                let min = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                dp[i][j] = (1 + min) + "";
                res = Math.max(res, dp[i][j])
            }
        }
    }
    return res > 1 ? res * res : res;

};

let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];
//matrix = [["0","1"],["1","0"]]
console.log(maximalSquare(matrix));
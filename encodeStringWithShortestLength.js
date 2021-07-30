/**
 * @param {string} s
 * @return {string}
 * Input: s = "abbbabbbcabbbabbbc"
 * 471. Encode String with Shortest Length
Hard
Output: "2[2[abbb]c]"

 */
var encode = function(s) {
    let n = s.length;
    const dp = Array(n);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = Array(n);
    }
    for (let j = 0; j < n; ++j) {
        let i = j;
        dp[i][j] = s.substring(j, j+1);
        for (let p = 0; p < i; ++p) {
            dp[p][j] = dp[p][j - 1] + dp[i][j];
        }
        for (i = j - 1; i + 1 >= j - i; --i) {
            const sub = s.substring(i + 1, j + 1); // s[i+1..j]
            for (let k = i - (j - i) + 1; k >= 0 && sub === s.substring(k, k + j - i); k -= j - i) {
                const str = ((j + 1 - k) / (j - i)).toString() + "[" + dp[i+1][j] + "]";
                if (str.length < dp[k][j].length) {
                    dp[k][j] = str;
                    for (let p = 0; p < k; ++p) {
                        if (dp[p][k - 1].length + str.length < dp[p][j].length) {
                            dp[p][j] = dp[p][k - 1] + str;
                        }
                    }
                }
            }
        }
    }
    return dp[0][n-1];
};
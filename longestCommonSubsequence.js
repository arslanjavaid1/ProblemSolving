/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
let result;
let memo;
var longestCommonSubsequence = function(text1, text2) {
    memo = {};
    result = 0
    if(text1.lenght === 0 && text2.length === 0) return 0;
    let m = text1.length; 
    let n = text2.length;
    return LCS(text1,text2,m,n, memo)
};

const LCS = (t,t2,m,n, memo) => {
    let key = [m,n].join(',');
    if(key in memo) return memo[key];
    if(n === 0 || m === 0) return 0;
    else if(t[m - 1] === t2[n - 1]) {
        result = 1 + LCS(t, t2, m - 1, n - 1, memo);
    } else if(t[m - 1] !== t2[n - 1]) {
            let temp1 = LCS(t, t2, m - 1, n,memo);
            let temp2 = LCS(t, t2, m, n - 1, memo)
            result = Math.max(temp1, temp2)
        }
    memo[key] = result;
    return result;
}

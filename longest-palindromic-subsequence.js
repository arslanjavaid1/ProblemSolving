
var longestPalindromeSubseq = function(s) {
    let length = s.length;
    
    let dp = new Array(length).fill(1);
    
    for (let i = length-1; i >= 0; i--) {
        let prev = 0;
        for (let j = i+1; j < length; j++) {
            let tmp = dp[j];
            if (s[i] === s[j]) {
                dp[j] = prev + 2
            } else {
                dp[j] = Math.max(dp[j], dp[j-1])
            }
            prev = tmp;
        }
    }
    return dp[length-1];
};


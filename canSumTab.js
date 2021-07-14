const canSum = (target, arr) => {
    let dp = Array(target + 1).fill(null);
    dp[0] = [];
    for (let i = 0; i <= target; i++) {
        if (dp[i] !== null) {
            for (num of arr){
                const comb = [...dp[i], num];
                if(!dp[i + num] || comb.length < dp[i + num].length)
                    dp[i + num] = comb;
            }
        } else continue;
    }
return dp[target];
} 

console.log(canSum(8, [2, 3, 5]));
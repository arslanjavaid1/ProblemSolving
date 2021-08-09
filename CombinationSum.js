const combinationSum = (nums, n) => {
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let x of nums) {
            dp[i + x] += dp[i];
        }

    }
    console.log(dp)
    return dp[n]

}
let n = 4, nums = [1, 2, 3];
console.log(combinationSum(nums, n));

const coingChange = (nums, n) => {
    let dp = Array(n).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < n; i++) {
        for (let x of nums) {
            if (x <= i)
                dp[i] = Math.min(dp[i], dp[i - x] + 1)
        }

    }
    console.log(dp)
    return dp[n - 1]

}
n = 6, nums = [1, 2, 3];
console.log(coingChange(nums, n));


const coingChange2 = (nums, n) => {
    let dp = Array(n).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < n; i++) {
        for (let x of nums) {
            if (x <= i)
                dp[i] = Math.min(dp[i], dp[i - x] + 1)
        }

    }
    console.log(dp)
    return dp[n - 1]

}
n = 5, nums = [1, 2, 5];
console.log(coingChange2(nums, n));
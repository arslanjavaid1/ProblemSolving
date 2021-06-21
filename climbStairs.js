var climbStairs = function(n, memo = {}) {
    if(memo[n])
        return memo[n];
    if(n === 0 || n===1)
        return 1;
   count=  climbStairs(n-1) + climbStairs(n - 2) ;
    return memo[n];
};

console.log(climbStairs(38));
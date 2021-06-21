var rob = function(nums, i = nums.length - 1, memo = {}) {
    
    if(i in memo)
        return memo[i];
    if(i < 0)
        return 0;
    
let max = Math.max((rob(nums, i - 2, memo) + nums[i]), rob(nums, i-1, memo));
    memo[i] = max;
    return max;
};
console.log(rob([1,2,3,1]))
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let count;
var findTargetSumWays = function (nums, target) {
    if (nums.length === 0)
        return 0;
    count = 0;
   return  backTrack(nums, target);
};

const backTrack = (nums, target, i = 0, sum = 0, memo = {}) => {
    let key = [i, sum].join(',');
    if (key in memo)
        return memo[key];
    if (i === nums.length) {
        if (sum === target)
            return 1;
        else return 0;
    }
    let num = nums[i];

    let add = backTrack(nums, target, i + 1,sum + nums[i], memo);
    let sub = backTrack(nums, target, i + 1, sum - nums[i],memo);
    memo[key] = add + sub;
    return add + sub;
}



let nums = [1, 0], target = 1
nums = [0, 0, 0, 0, 0, 0, 0, 0, 1]
target = 1
console.log(findTargetSumWays(nums, target))

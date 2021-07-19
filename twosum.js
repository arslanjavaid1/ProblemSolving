/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length === 0) return 0;
    let set = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i]))
            set.set(nums[i], i);
    }
    final = [];
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if (set.has(remainder)) {
            final = [set.get(remainder), i]
        }

    };
    return final;
}
let nums = [2, 7, 11, 15], target = 9;

console.log(twoSum(nums, target))
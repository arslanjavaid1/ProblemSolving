/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let end = nums.length;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < end; i++) {
        sum += nums[i];
        count += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);

    }
    return count;
};

console.log(subarraySum([1, 1, 1], 2));
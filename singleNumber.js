/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if(nums.length === 0)
    return 0;
    if(nums.length === 1)
        return nums[0];
    let a = 0;
    for (let i of nums) {
      a ^= i;
    }
    return a;
};
console.log(singleNumber([1,2,2,1,4]))
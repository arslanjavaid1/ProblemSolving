/**
 * @param {number[]} nums
 * @return {number}
 * 724. Find Pivot Index
Easy

 */
var pivotIndex = function(nums) {
    let sum = 0;
    let leftsum  = 0;
    for(let num of nums) sum += num;
    for(let i = 0; i < nums.length; i++) {
        if(leftsum === sum - leftsum - nums[i]) return i;
        leftsum += nums[i];
    }
    return -1;
};
let nums = [1,7,3,6,5,6];
console.log(pivotIndex(nums))
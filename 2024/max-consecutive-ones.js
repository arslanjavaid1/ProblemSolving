// Problem Statment

// Given a binary array nums, return the maximum number of consecutive 1's in the array.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let count = 0;
    let start = 0;
    let end = nums.length;
    let window = start;
    while(window <= end) {
        if(nums[window] === 1){
            count++;
        } else{
            start = window;
            res = Math.max(count, res);
            count = 0;
        }
        window++;
    }
    return res;
};
let nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));


// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

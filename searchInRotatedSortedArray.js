/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
33. Search in Rotated Sorted Array

*/
var search = function(nums, target) {
    if(nums.length === 0 ) return 0;
    let start = 0;
    let end = nums.length - 1;
    while(end >= start) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] == target)
            return mid;
        if(nums[mid + 1] === target) return mid + 1;
        if(nums[mid - 1] === target) return mid - 1 ;
        else if(nums[0] <= nums[mid]) {
            if(target >= nums[start] && target < nums[mid]) end = mid - 1;
            else start = mid + 1;   
        } else {
            if(target <= nums[end] && target > nums[mid]) start = mid + 1;
            else end = mid - 1;
        }
            
    }
    return -1;
};
let nums = [4,5,6,7,0,1,2], target = 3;
console.log(search(nums, target))
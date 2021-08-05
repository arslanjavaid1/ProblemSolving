/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    let len = nums.length;
    
    while(i < len){
        let j = nums[i] - 1;
        
        if(nums[i] > 0 && nums[i] <= len && nums[i] !== nums[j]){
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    
    for(let i = 0; i < len; i++){
        if(nums[i] !== i + 1){
            return i + 1;
        }
    }
    
    return len + 1;
};
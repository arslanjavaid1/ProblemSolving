/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    if(nums.length === 0) return 0;
    let n = nums.length;
    let result = [1];
    for(let i = 0; i < n - 1; i++) {
        let val =  nums[i] * result[ result.length - 1 ];
        result.push(val);
    }
    let val = 1;
    for(let i = n - 1; i >= 0; i-- ) {
        result[i] =  val * result[i];
        val = nums[i] * val;
    }
    return result
};

console.log(productExceptSelf([1,2,3,4]))
var rotate = function(nums, k) {
    if(k == 0)
        return nums;
    if(nums.length === 0)
        return [];
    for(let i = 0; i < k; i ++) {
        const lastVal = nums.pop();
        nums = [lastVal, ...nums];
    }
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7],3));
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
/// In Place
var rotate = function(nums, k) {
    if(k == 0)
        return nums;
    if(nums.length === 0)
        return [];
    k %= nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k , nums.length - 1);
};

const reverse = (nums, i, j) => {
    while(i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}

console.log(rotate([1,2,3,4,5,6,7],3));
console.log(rotate([1,2,3,4,5,6,7],3));
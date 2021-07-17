/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    if(nums.length === 0) return 0;
    const n = nums.length;
    let count = 0;
    nums.sort((a,b)=> a - b);
    for(let i = n; i >= 2; i--) {
        let l = 0; let r = i - 1;
        while (l < r) {
            if(nums[l] + nums[r] > nums[i]) {
                count += r - l;
                r--;
            } else l++
        }
    }
    return count;
}

console.log(triangleNumber([4,2,3,4]))
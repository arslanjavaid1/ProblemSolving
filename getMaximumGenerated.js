/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    if(n === 0) return 0;
    const nums = Array(n + 1);
    nums[0] = 0;
    nums[1] = 1;
    let max =  1;
    for(let i = 1; i < n; i++) {
        let j = 2 * i
        let k = 2 * i + 1;
            nums[j] = nums[i];
            nums[k] = k <= n ? nums[i + 1] + nums[i] : 0;
        max = Math.max(max, Math.max(nums[j], nums[k]))
    }
    return max;
};
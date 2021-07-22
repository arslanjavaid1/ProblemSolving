/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(!nums) return 0;
    const set = new Set(nums);
    let longest = -Infinity;
    for(let i = 0 ; i < nums.length; i++) {
        if(!set.has(nums[i] - 1)) {
           let current = nums[i];
           let streak = 1;
            while(set.has(current + 1)) {
                streak++;
                current = current + 1;
            }
            longest = Math.max(longest, streak);
        }
    }
    return longest === -Infinity ? 0 : longest;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
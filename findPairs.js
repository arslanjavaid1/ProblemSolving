/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(!nums.length) return 0;
    let set = new Map();
    for(let num of nums) set.set(num, (set.get(num) || 0)  + 1);
    console.log(set)
    let count = 0;
    for(let num of nums) {
        if(k === 0) {
            if(set.get(num) >= 2)
                count++;
        }
        else if(set.has(num - k)) count++;
        
    }
        return count;
};
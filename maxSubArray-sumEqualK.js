/**
 * Time = O(n) where n is the length of nums because:
 *  - Iterating through the array once: O(n)
 *  - Adding current sum to hahsmap: O(1), check existing sums: O(1) and other
 * operations take constant time.
 * => Total O(2n) => remove constant = O(n)
 * Space = O(n) because we might store n sums in the hashmap.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    // Use a Map to store computed sums:
    const sums = new Map();
    let sum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // Edge case if first num = k => maxLength = i + 1 because indices
        // start at 0.
        if (sum === k) maxLength = i + 1;
        // If current sum hasn't been seen before, add to hashmap with value is
        // the current index i:
        if (!sums.has(sum)) sums.set(sum, i);
        // If sum - k has been seen => compare the current maxLength with the
        // distance between current index i and stored index j at sum - k:
        // Note: i - j because indices start at 0.
        if (sums.has(sum - k)) {
            maxLength = Math.max(maxLength, i - sums.get(sum - k));
        }
    }

    return maxLength;
};
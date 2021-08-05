/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  if (!nums.length) return 0;
  let min = nums[0];
  let n = nums.length - 1;
  for (let n of nums) min = Math.min(min, n);
  let res = 0;
  for (let n of nums) res += n - min;
  return res;
};
let nums = [1, 2, 3];
console.log(minMoves(nums));

/// SEcond PArt 462. Minimum Moves to Equal Array Elements II
/*

Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

Test cases are designed so that the answer will fit in a 32-bit integer.

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let count = 0;
  while (l < r) {
    count += nums[r] - nums[l];
    l++;
    r--;
  }
  return count;
};
nums = [1, 2, 3]
console.log(minMoves2(nums))
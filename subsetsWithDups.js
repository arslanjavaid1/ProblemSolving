/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    if (!nums.length) return [[]];
    nums.sort((a, b) => a - b);
    let res = Array();
    backtrack(nums, 0, [], res)
    return res;
};
const backtrack = (nums, idx, path, res) => {
    res.push([...path]);
    for (let j = 0; j < nums.length; j++) {
        if (j === 0 || nums[j] !== nums[j - 1]) {
            path.push(nums[j]);
            backtrack(nums.slice(j +1), j + 1,path, res);
            path.pop();
        }
    }
    return;
}


let nums = [1, 2, 2];
console.log(subsetsWithDup(nums))
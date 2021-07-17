/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let result;
let visited;
var fourSum = function (nums, target) {
    visited =[];
    result = [];
    backtrack(nums, target,visited,result);
    return [...new Set(result.sort())];
}
const backtrack = (nums, target, visited, result, perm = []) => {
    if(perm.length === 4) {
        let sum = 0;
        perm.map(x => sum+=x);
        if(sum === target) {
            let perms = [...perm].sort((a,b) => a - b);
            let res = JSON.stringify(result);
            p = JSON.stringify(perms);
            if(!res.includes(p))
                result.push([...perms]);
        }
        return;
    }
    for(let i = 0; i < nums.length; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        perm.push(nums[i]);
        backtrack(nums, target, visited,result,perm);
        visited[i] = false;
        perm.pop();
    }
}




// var fourSum = function (nums, target) {
//     let left = 0;
//     let result = [];
//     nums.sort((a, b) => a - b);
//     let right = nums.length - 1;
//     let mid = left + 1;
//     let rmid = right - 1;
//     while (left < right && mid < rmid) {
//         let leftVal = nums[left]
//         let leftVal1 = nums[mid]
//         let rightVal = nums[right]
//         let rightVal1 = nums[rmid]
//         if (leftVal + leftVal1 + rightVal + rightVal1 === target) {
//             result.push([leftVal, leftVal1, rightVal1, rightVal]);
//             mid++;
//             rmid--;
//         }
//         if (leftVal + leftVal1 + rightVal + rightVal1 < target) {
//             left++;
//             mid = left + 1;
//         }
//         else if (leftVal + leftVal1 + rightVal + rightVal1 > target) {
//             right--;
//             rmid = right - 1;
//         }
//     }
//     return result;
// }

//let r = [1, 0, -1, 0, -2, 2], target = 0;
let r = [-471,-434,-418,-395,-360,-357,-351,-342,-317,-315,-313,-273,-272,-249,-240,-216,-215,-214,-209,-198,-179,-164,-161,-141,-139,-131,-103,-97,-81,-64,-55,-29,11,40,40,45,64,87,95,101,115,121,149,185,230,230,232,251,266,274,277,287,300,325,334,335,340,383,389,426,426,427,457,471,494];
let target = 2705;
console.log(fourSum(r, target))
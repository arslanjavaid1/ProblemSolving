/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result = Array();
    if(!nums)
        return result;
    let visited = Array();
    let permutation = Array();
    const backTrack = (nums,permutation, visited, result) => {
        if(permutation.length === nums.length){
            result.push([...permutation].join(''));
            return;
        }
        for(let i = 0; i < nums.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            permutation.push(nums[i]);
            backTrack(nums, permutation,visited,result);
            visited[i] = false;
            permutation.pop(nums[i]);
        }
    }
    
    backTrack(nums,permutation, visited, result);
    return result;
};


console.log(permute(("aab").split('')))
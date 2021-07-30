/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 862. Shortest Subarray with Sum at Least K
    Hard
 */
 var shortestSubarray = function(A, K) {
    let n = A.length;
    let min = n+1;
    let B = new Array(n+1).fill(0);
    for(let i=0; i<n; i++) B[i+1] = B[i] + A[i];
    let stack = [];
    for(let i=0; i<n+1; i++){
        while(stack.length > 0 && B[i]-B[stack[0]] >= K){
            min = Math.min(min, i-stack[0]);
            stack.shift();
        }
        while(stack.length > 0 && B[i] <= B[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(i);
    }
    return min <= n ? min : -1;
};
nums = [2,-1,2], k = 3

console.log(shortestSubarray(nums, k));
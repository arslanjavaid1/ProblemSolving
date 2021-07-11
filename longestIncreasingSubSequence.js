const longestIncreasingSubSequence = (arr) => {
let max = Array(arr.length).fill(1);
    for (let i = 0; i < arr.length; i++) {
        let sum = Array();
        for (let k of max) {
            if (arr[k] < arr[i])
                sum[k] = 1;
        }
        max[i] = 1 + Math.max(sum.length, 0);
    }
    return Math.max(max.length, 0);
}

console.log(longestIncreasingSubSequence([5,2,8,6,3,6,9,5]))
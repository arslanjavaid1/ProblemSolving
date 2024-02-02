/* Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    if(arr.length === 0 || !arr.includes(0)) return;
    let arrLength = arr.length;
    for(let i = 0; i < arrLength; i++) {
        if(arr[i] === 0) {
            arr.splice(i, 0 , 0);
            i++;
        }
    }
    console.log(arr);
    arr.splice(arrLength - arr.length);
    console.log(arr);
    return;

};

let nums = [1,0,2,3,0,4,5,0];
console.log(duplicateZeros(nums));
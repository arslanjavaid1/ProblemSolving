/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function (nums1, m, nums2, n) {
    if (m === 0 && n === 0)
        return;
    let i =  m - 1;
    let j = n - 1;
    let t = m + n - 1;
    while (j >= 0 && i >= 0) {
        if (nums1[i] > nums2[j] ) {
            nums1[t--] = nums1[i--];
        } else {
            nums1[t--] = nums2[j--];
        }
    }
    
    while(j>=0) {
        nums1[t--] = nums2[j--];
    }
    return nums1;
    
};


let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [4,5,6], n = 3
console.log(merge(nums1, m, nums2, n));

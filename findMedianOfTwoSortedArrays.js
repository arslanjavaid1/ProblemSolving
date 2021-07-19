/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 const getValue = (arr, i) => {
    if (i === -1) return -Infinity;
    if (i === arr.length) return Infinity;
    return arr[i];
}
const getIndicies = (rShort, aShort, aLong) => {
    let mid = Math.trunc((aShort.length + aLong.length) / 2);
    let rLong = mid - rShort;
    return [rShort - 1, rShort, rLong - 1, rLong];
}
const getDirections = (lShort, rShort, lLong, rLong, aShort, aLong) => {
    if(getValue(aShort, lShort) > getValue(aLong, rLong))
        return -1;
    else if(getValue(aLong, lLong) > getValue(aShort, rShort))
        return 1;
    else return 0;
}
const getResult = (lShort, rShort, lLong, rLong, aShort, aLong) => {
    let odd = (aShort.length + aLong.length) % 2;
    if(odd) {
        return Math.min(getValue(aLong, rLong), getValue(aShort, rShort));
    } else {
        return (Math.max(getValue(aShort, lShort), getValue(aLong, lLong)) + Math.min(getValue(aShort, rShort), getValue(aLong, rLong))) / 2;
    }
}
var findMedianSortedArrays = function (nums1, nums2) {
    let aShort = nums1;
    let aLong = nums2;
    if (nums1.length > nums2.length) {
        aShort = nums2;
        aLong = nums1;
    }
    let l = 0;
    let r = aShort.length;
    let d = 1;
    let lShort, rShort, lLong,rLong = 0;
    while (d !== 0) {
        let mid = Math.floor((l + r) / 2);
        [lShort, rShort, lLong, rLong] = getIndicies(mid, aShort, aLong);
        d = getDirections(lShort, rShort, lLong, rLong, aShort, aLong);
        if(d < 0)
            r = mid - 1;
        else if( d > 0)
            l = mid + 1;
    }
    return getResult(lShort, rShort, lLong, rLong, aShort, aLong);      
};
let nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))
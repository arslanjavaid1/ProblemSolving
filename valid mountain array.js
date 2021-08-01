/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(a) {
    let n = a.length
    let i = 0, j = n - 1;
    
    while(i < n && a[i] < a [i + 1])i++;
    while(j > 0 && a[j - 1] > a[j]) j--;
    return (i > 0 && i === j && j < n - 1);
};
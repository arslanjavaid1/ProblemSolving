/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length === 0) return 0;
    let max = -Infinity;
    let l = 0;
    let  r = height.length - 1;
    while(l < r) {
        let left = height[l];
        let right = height[r];
        max = Math.max(Math.min(left, right) * (r - l), max);
        if(left < right) {
            l++;
        }else r--
    }
    return max;
};
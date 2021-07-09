/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    if(height.length === 0)
        return 0;
    let left = 0, right =  height.length -1,
        leftmax = 0, rightmax = 0;
    let ans = 0;
    while(left < right) {
        if(leftmax < height[left]) leftmax = height[left];
            
        if(rightmax < height[right])
            rightmax = height[right];
        if(leftmax < rightmax) {
            ans += Math.max(0, leftmax - height[left])
            left++;
        }  else {
            ans += Math.max(0, rightmax - height[right]) 
            right--;
        }
    }
    return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
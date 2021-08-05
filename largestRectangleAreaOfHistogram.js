/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(!heights.length) return 0;
    if(heights.length === 1) return heights[0]
    let stack = [];
    let i = 0;
    let max = 0;
    while(i < heights.length) {
        if(stack.length === 0 || heights[stack[stack.length - 1] || 0] <= heights[i]) {
            stack.push(i++);
        } else {
            let currMax = stack.pop();
            let area = heights[currMax] * (stack[stack.length - 1] ? (i - 1 - stack[stack.length - 1]) :(i - 1));
            max = Math.max(area, max);
        }
    }
    while(stack.length !== 0) {
        let currMax = stack.pop();
        let area = heights[currMax] * (stack[stack.length - 1] ? (i - 1 - stack[stack.length - 1]) :(i - 1));
        max = Math.max(area, max);
    }
    return max;
};
let heights = [2,1,5,6,2,3];
heights = [2,4];
heights = [1,1]

console.log(largestRectangleArea(heights))
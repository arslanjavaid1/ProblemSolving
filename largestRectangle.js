var largestRectangleArea = function(heights) {
    let pStack = [], hStack = [];
    let maxA = 0;
    for (let i = 0; i < heights.length; i++) {
        if (hStack.length == 0 || hStack[hStack.length-1] < heights[i]) {
            hStack.push(heights[i]);
            pStack.push(i);
        }
        while (hStack[hStack.length-1] > heights[i]) {
            let height = hStack.pop();
            let pos = pStack.pop();
            maxA = Math.max(maxA, (i-pos)*height);
            
            if (pStack.length == 0|| hStack[hStack.length-1] < heights[i]) {
                hStack.push(heights[i]);
                pStack.push(pos);
            }
        }
    }
    while (hStack.length > 0 && pStack.length > 0) {
        maxA = Math.max(maxA, (heights.length-pStack.pop()) * hStack.pop());
    }
    return maxA;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};


console.log(largestRectangleArea([2,1,5,6,3,3]))
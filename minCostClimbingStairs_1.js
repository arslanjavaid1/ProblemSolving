/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(!cost.length) return 0;
    const n = cost.length;
    let first = cost[0] || 0;
    let second = cost[1] || 0;
    if(n <= 2) return Math.min(first, second);
    for(let i = 2; i < n; i++) {
        let curr = cost[i] + Math.min(first, second);
        first = second;
        second = curr;
    }
    return Math.min(first, second);
};
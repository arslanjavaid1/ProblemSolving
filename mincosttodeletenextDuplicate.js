/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 * 1578. Minimum Deletion Cost to Avoid Repeating Letters
    Medium
 */
var minCost_ = function (s, cost) {
    if (!s) return 0;
    let i = 0, j = 1;
    let min = Infinity;
    let n = s.length;
    s = s.split('');
    let sum = 0;
    while (i < s.length || j < s.length) {
        if (s[i] === s[j]) {
            if (cost[i] < cost[j]) {
                sum += cost[i];
                s.splice(i, 1);
                cost.splice(i, 1);
            } else {
                sum += cost[j];
                s.splice(j, 1);
                cost.splice(j, 1);
            }
        } else {
            i++;
            j++;
        }
    }
    return sum;
};
var minCost = function (s, cost) {
    let res = 0, max = 0, sum = 0, n = s.length;
    for (let i = 0; i < n; ++i) {
        if (i > 0 && s.charAt(i) !== s.charAt(i - 1)) {
            res += sum - max;
            sum = 0; max = 0;
        }
        sum += cost[i];
        max = Math.max(max, cost[i]);
    }
    res += sum - max;
    return res;
}
//let s = "abaac", cost = [1, 2, 3, 4, 5];
//s = "abc", cost = [1,2,3];
//s = "aabaa", cost = [1, 2, 3, 4, 1]
s ="aaabbbabbbb", cost = [3,5,10,7,5,3,5,5,4,8,1]
console.log(minCost(s, cost));
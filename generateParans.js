/**
 * @param {number} n
 * @return {string[]}
 */
let result;
var generateParenthesis = function (n) {
    if (n === 0) return "";
    if (n === 1) return ["()"];
    result = [];
    backTrack(n, result, "", 0,0);

    return result;
};
const backTrack = (n, result, s, start,end) => {
    if (s.length === n * 2) {
        result.push(s);
        return;
    }
    if(start < n) {
        backTrack(n,result,s+"(", start+1,end)
    }
    if(end < start)
        backTrack(n,result,s+")", start, end+1);
}

console.log(generateParenthesis(3))
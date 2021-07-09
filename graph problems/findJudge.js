/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    if( n === 1)
        return 1;
    let ans =  Array(n + 1).fill(0);
    for(let [i,j] of trust) {
        ans[i] -= Infinity;
        ans[j]+=1;
}
    return ans.indexOf(n - 1);
}
  console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))
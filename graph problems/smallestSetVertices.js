/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    if(!edges)
        return [];
    let map = new Map()
    for(let i = 0;i < edges.length;i++) {
        if(map.has(edges[i][1]))
            continue;
        else {
            map.set(edges[i][1], 1);
        }
    }
    let result = Array();
    for(let i = 0; i < n;i++) {
        if(!map.has(i))
            result.push(i);
    }
    return result;
};

console.log(findSmallestSetOfVertices(5,[[1,3],[2,0],[2,3],[1,0],[4,1],[0,3]]));
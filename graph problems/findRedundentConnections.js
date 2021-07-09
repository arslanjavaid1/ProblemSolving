/**
 * @param {number[][]} edges
 * @return {number[]}
 */
let result;
let visited;
var findRedundantConnection = function (edges) {
    if (!edges)
        return [];
    let conn = Array(edges.length + 1).fill(Array());
    visited = Array(edges.length).fill(false)
    result = Array();
    for (let i = 0; i < edges.length; i++) {
        visited = [];
        if (conn[edges[i][0]] !== null && conn[edges[i][1]] !== null && dfs(conn, edges[i][0], edges[i][1]))
            return edges[i];
        conn[edges[i][0]] = [...conn[edges[i][0]], edges[i][1]];
        conn[edges[i][1]] = [...conn[edges[i][1]], edges[i][0]];
    }
};
const dfs = (conn, index, end) => {
    if (!visited[index]) {
        visited[index] = true;
        if (index === end) return true;
        for (let neigh of conn[index]) {
            if (dfs(conn, neigh, end)) return true;
        }
    }
    return false;
}
let edges = [[1, 2], [1, 3], [2, 3]]
edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]];
edges = [[9,10],[5,8],[2,6],[1,5],[3,8],[4,9],[8,10],[4,10],[6,8],[7,9]]
console.log(findRedundantConnection(edges))
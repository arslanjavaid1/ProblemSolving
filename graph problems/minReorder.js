/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    let conn = Array(n).fill(Array());
    for (let con of connections) {
        if (conn[con[0]] === null) conn[con[0]] = Array().fill(-1);
        if (conn[con[1]] === null) conn[con[1]] = Array().fill(-1);
        conn[con[0]] = [...conn[con[0]], [con[1], 1]];
        conn[con[1]] = [...conn[con[1]], [con[0], 0]];
    }
    return dfs(0, conn);
};

const dfs = (i, conn, visited = []) => {
    let cost = 0;
    visited[i] = true;
    for (let neigh of conn[i]) {
        if (!visited[neigh[0]]) {
            cost += neigh[1];
            cost += dfs(neigh[0], conn, visited)
        }
    }
    return cost;
}

console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]));
console.log(minReorder(3,[[1,2],[2,0]]));
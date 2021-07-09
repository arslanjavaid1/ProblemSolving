/**
 * @param {number[][]} stones
 * @return {number}
 */
let visited;
var removeStones = function (stones) {
    if (!stones)
        return 0;
    let count = 0;
    let n = stones.length;
    let conn = Array(n).fill(Array());
    visited = Array(n).fill(false);
    for (let stone of stones) {
        conn[stone[0]] = [...conn[stone[0]], stone[1]];
    }
    for (let stone of stones) {
        if (!visited[stone[0]]) {
            dfs(conn, visited, stone[0])
            count++;
        }
    }
    return n - count;
};
const dfs = (conn, visited, index) => {
    visited[index] = true;
    for (let neight of conn[index]) {
        if (!visited[neight])
            dfs(conn, visited, neight);
    }
}

let stones = [[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]];
stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
stones = [[0,0]]
stones = [[0,1],[1,0]]
console.log(removeStones(stones));
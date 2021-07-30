/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    if (n <= 0) return 0;
    if (roads.length === 0) return 0;
    let max = 0;
    let graph = Array(n).fill(0);
    let roadExists = Array(n).fill(false).map(()=> Array(n));
    for (let conn of roads) {
        console.log(conn)
        graph[conn[0]]++;
        graph[conn[1]]++;
        roadExists[conn[0]][conn[1]] = true;
        roadExists[conn[1]][conn[0]] = true;
    };
    for(let c = 0; c < n; c++) {
        for(let c2 = c +1; c2 < n; c2++) {
            let sum = graph[c] + graph[c2];
            if(roadExists[c][c2]) sum--;
            max = Math.max(max, sum);

        }
    }
    return max;
};
let n = 4, roads = [[0, 1], [0, 3], [1, 2], [1, 3]];
//n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]];
n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]
n = 2, roads = [[1, 0]]
console.log(maximalNetworkRank(n, roads));
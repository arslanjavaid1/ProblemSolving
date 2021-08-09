var makeConnected = function (n, connections) {
    let edges = connections.length;
    if (edges < n - 1) return -1;
    let g = [];
    for (let i = 0; i < n; i++) g[i] = []
    for (let i = 0; i < edges; i++) {
        g[connections[i][0]].push(connections[i][1]);
        g[connections[i][1]].push(connections[i][0]);
    }
    let v = Array(n).fill(0), c = 0;
    for (let i = 0; i < n; i++) {
        if (!v[i]) {
            c++;
            dfs(i, g, v)
        }
    }
    return c - 1;
};
function dfs(i, con, v) {
    v[i] = 1;
    for (let x of con[i]) {
        if (!v[x]) dfs(x, con, v)
    }
}
let n = 4, connections = [[0, 1], [0, 2], [1, 2]];
// n = 5, connections = [[0, 1], [0, 2], [3, 4], [2, 3]]
console.log(makeConnected(n, connections))
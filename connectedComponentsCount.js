const connectedComponentsCount = (graph) => {
    console.log(graph)
    let count = 0;
    let visited = []
    const dfs = (node, visited) => {
        if(visited[node]) return false;
        visited[node] = true;
        for(let n of graph[node]) {
            dfs(n, visited);
        }
        return true;
    }
    for (let node in graph) {
        if (!visited[node]) {
            if(dfs(node, visited)) count++;
        }
    }
    return count
};

console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})); // -> 2
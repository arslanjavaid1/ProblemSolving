const largestComponent = (graph) => {
    let count = 0;
    let visited = []
    const dfs = (node, visited, count) => {
        if(visited[node]) return count;
        visited[node] = true;
        count++;
        for(let n of graph[node]) {
            count = dfs(n, visited, count);
        }
        return count;
    }
    for (let node in graph) {
        if (!visited[node]) {
            count = Math.max(dfs(node, visited, 0), count)
        }
    }
    return count
};

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }))
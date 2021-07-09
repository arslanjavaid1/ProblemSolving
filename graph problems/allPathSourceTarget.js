/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let result;
var allPathsSourceTarget = function (graph) {
    if (!graph) return null;
    result = Array()
    dfs(graph)
    return result;
};
const dfs = (graph, i = 0, visited = [], path = []) => {
    path.push(i);
    visited[i] = true;
    if(i === graph.length - 1) {
        result.push([...path]);
    }
    for (let j = 0; j < graph[i].length; j++) {
        if(visited[graph[i][j]])
            continue;
       dfs(graph, graph[i][j],visited, path);
    }
    path.pop()
    visited[i] = false;
}

let graph =  [[2],[],[1]]
console.log(allPathsSourceTarget(graph));
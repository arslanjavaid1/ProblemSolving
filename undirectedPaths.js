const undirectedPath = (edges, nodeA, nodeB) => {
    let graph = {};
    graph = buildGraph(edges);
    let visited = [];
    let q = [nodeA];
    while(q.length > 0) {
        let node = q.shift();
        if(node === nodeB) return true;
        for(let nodes of graph[node]) {
            if(!visited[nodes]) {
                q.push(nodes);
                visited[nodes] = true;
            }
        }
    }
    return false
};
const buildGraph = (edges) => {
    let graph = {};
    for(let edge of edges) {
        const [edge1, edge2] = edge;
        if(!(edge1 in graph)) graph[edge1] = [];
        if(!(edge2 in graph)) graph[edge2] = [];
        graph[edge1].push(edge2);
        graph[edge2].push(edge1);
    }
    return graph;
}


const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
  console.log(undirectedPath(edges, 'j', 'm')); // -> true
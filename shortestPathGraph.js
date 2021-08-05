
const shortestPath = (edges, nodeA, nodeB) => {
    let graph = buildGraph(edges);
    let count = Infinity;
    let path = 0;
    let visited = [];
    let q = [[nodeA, 0]];
    while(q.length > 0) {
        let [node, dst] = q.shift();
        if(node === nodeB) {
            return dst;
        }
        for(let n of graph[node]) {
            if(!visited[n]) {
                visited[n] = n;
                q.push([ n, dst+1]);
            }
        }
    }
    return -1;
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
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
  console.log(shortestPath(edges, 'w', 'z')); // -> 
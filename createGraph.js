class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
    addEdge(node) {
        this.edges.push(node);
        node.edges.push(this);
    }
    getAdjecentNodes() {
        return this.edges.map(ed => ed.value);
    }
    isConnected(node) {
        return this.edges.includes(node);
    }
}
class Graph {
    constructor(nodes) {
        this.nodes = [...nodes]
    }
    addNode(node) {
        this.nodes.push(node);
    }
    reconstructPath(visited, end) {
        let currentNode = end;
        const shortestPath = [];
        while (currentNode !== null) {
            shortestPath.push(currentNode.value);
            currentNode = visited[currentNode.value];
        }
        return shortestPath.reverse();
    }
    DFS(node, end, visited) {
        if (node.value === end.value) {
            console.log('found')
            return;
        }
        visited.add(node);
        for (let edge of node.edges) {
            if (!visited.has(edge)) {
                this.DFS(edge, end, visited);
            }
        }
        return;

    }
    BFS(node, end) {
        const queue = [];
        const visited = {};
        queue.push(node);
        visited[node.value] = null;
        while (queue.length > 0) {
            let n = queue.shift();
            if (n.value === end.value) {
                console.log(`found the end ${n.value}`);
                return this.reconstructPath(visited, end);
            }
            for (let edge of n.edges) {
                if (!visited.hasOwnProperty(edge.value)) {
                    queue.push(edge);
                    visited[edge.value] = n;
                }
            }
        }
    }
}


let JFK = new Node('JFK');
let DFW = new Node('DFW');
let BOS = new Node('BOS');
let LAX = new Node('LAX');
let HNL = new Node('HNL');
let MIA = new Node('MIA');

let graph = new Graph([JFK, DFW, BOS, LAX, HNL, MIA]);
DFW.addEdge(JFK)
DFW.addEdge(LAX)
LAX.addEdge(HNL)
JFK.addEdge(MIA)
JFK.addEdge(BOS)
let visited = new Set();
console.log(graph.BFS(DFW, MIA));
console.log(graph.DFS(DFW, MIA, visited));

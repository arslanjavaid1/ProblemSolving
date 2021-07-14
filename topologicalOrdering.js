class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
    addEdge(node) {
        this.edges.push(node);
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
    topologicalSort() {
        const visited = new Set();
        const order = [];
        for (const node of this.nodes) {
            this.dfs(node, visited, order)
        }
        console.log(order.reverse())
    }
    dfs(start, visited, order) {
        if (visited.has(start))
            return;
        visited.add(start);
        console.log(start.value);
        for (const edge of start.edges) {
            this.dfs(edge, visited, order)
        }
        order.push(start.value);
    }
}


let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D');
let E = new Node('E');
let F = new Node('F');

let graph = new Graph([A, B, C, D, E, F]);
A.addEdge(B)
A.addEdge(C)
B.addEdge(D)
D.addEdge(F)
E.addEdge(C)
E.addEdge(F)
console.log(graph.topologicalSort());

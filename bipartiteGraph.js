class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
        this.color = null;
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
    bipartite() {
        const visited = new Set();
        for (const node of this.nodes) {
            if (!visited.has(node)) {
                if (this.assignColor(node, visited)) {
                    const red = this.nodes.filter(node => node.color === 'red');
                    const blue = this.nodes.filter(node => node.color === 'blue');
                    red.map(e => console.log(`Red Team ${e.value}`));
                    blue.map(e => console.log(`Blue Team ${e.value}`));
                }
            }
        }
    }
    assignColor(start, visited) {
        visited.add(start);
        if (!start.color) {
            start.color = 'red';
        }
        for (const edge of start.edges) {
            if (!visited.has(edge)) {
                edge.color = start.color === 'red' ? 'blue' : 'red';
                if (!this.assignColor(edge, visited)) {
                    return false;
                }
            } else {
                if (start.color === edge.color) {
                    return false;
                }
            }
        }
        return true;
    }
}


let Jack = new Node('Jack');
let Emily = new Node('Emily');
let Lucy = new Node('Lucy');
let David = new Node('David');
let Jose = new Node('Jose');
let Paul = new Node('Paul');
let Brian = new Node('Brian');
let Chris = new Node('Chris');

let graph = new Graph([Jack, Emily, Lucy, David, Jose, Paul, Brian, Chris]);
Jack.addEdge(Brian)
Jack.addEdge(Emily)
David.addEdge(Lucy)
David.addEdge(Jose)
David.addEdge(Chris)
Lucy.addEdge(Brian)
Lucy.addEdge(Emily)
Lucy.addEdge(David)
Emily.addEdge(Jack)
Emily.addEdge(Lucy)
Jose.addEdge(Paul)
Paul.addEdge(Chris)
Chris.addEdge(Brian)
Brian.addEdge(Jack)

console.log(graph.bipartite());

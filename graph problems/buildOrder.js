class Graph {
    nodes = [];
    map = new Map();

    getOrCreateNodes(name) {
        if (!this.map.has(name)) {
            let node = new Project(name);
            this.nodes.push(node);
            this.map[name] = node;
        }
        return this.map[name];
    }
    addEdge(startName, endName) {
        let start = this.getOrCreateNodes(startName);
        let end = this.getOrCreateNodes(endName);
        start.addNeighbor(end);
    }
    getNodes() {
        return this.nodes;
    }
}
class Project {
    children = [];
    map = new Map();
    name = "";
    dependencies = 0;
    constructor(n) {
        this.name = n;
    }
    addNeighbor(node) {
        if (!this.map.has(node.getName())) {
            this.children.push(node);
            this.map.set(node.getName(), node);
            node.incrementDependencies();
        }
    }
    incrementDependencies() { this.dependencies++ }
    decrementDependencies() { this.dependencies-- }
    getName() {
        return this.name;
    }

    getChildren () { return this.children }
    getNumberDependencies () {return this.dependencies};
}

const findBuildOrder = (projects, dependencies) => {
    let graph = buildGraph(projects, dependencies);
    return orderProjects(graph.getNodes());
}

const buildGraph = (projects, dependencies) => {
    let graph = new Graph();
    for (let project of projects) {
        graph.getOrCreateNodes(project);
    }

    for (dependency of dependencies) {
        let f = dependency[0];
        let s = dependency[1];
        graph.addEdge(f, s);
    }
    return graph;
}

let orderProjects = (projects) => {
    let order = new Project(projects.length);
    let endOfList = addNonDependent(order, projects, 0);
    let toBeProcessed = 0;
    while (toBeProcessed < order.length) {
        let curr = order[toBeProcessed];
        if (curr === null) {
            return null;
        }
        let children = curr.getChildren();
        for (let child of children) {
            child.decrementDependencies();
        }
        endOfList = addNonDependent(order, children, endOfList);
        toBeProcessed++;
    }
    return order;
}

let addNonDependent = (order, projects, size) => {
    for (let project of projects) {
        if (project.getNumberDependencies() === 0) {
            order[size] = project;
            size++;
        }
    }
    return size;
}

let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies = [
    ['a', 'd'],
    ['f', 'b'],
    ['b', 'd'],
    ['f', 'a'],
    ['d', 'c']];

    console.log(findBuildOrder(projects, dependencies))
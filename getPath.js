// A simple, somewhat inefficient queue implementation
class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(item) {
        this.queue.unshift(item);
        this.size += 1;
    }

    dequeue() {
        this.size -= 1;
        return this.queue.pop();
    }
}

function getPath(graph, startNode, endNode) {
    if(!graph.startNode || !graph.endNode)
        throw new Error("NO Data");
    const queue = new Queue();
    const visited = new Set();
    const parent = [];
    let result = [];
    queue.enqueue(startNode);
    while (!queue.size == 0) {
        let node = queue.dequeue();
        if (node == endNode) {
            result.push(node);
            while(node != startNode) {
                result.push(parent[node]);
                node = parent[node];
            }
        } else {
        const graphNode = graph[node];
        if (graphNode) {
            graphNode.filter(n => !visited.has(n)).forEach(n => {
                visited.add(n);
                queue.enqueue(n);
                parent[n] = node; 
            });
        }
        }
    };
    let finalRes = [];
    while(result.length != 0) {
        finalRes.push(result.pop());
    }
    return finalRes.length > 0 ? finalRes : null;
};
const graph = {
    'a': ['b', 'c', 'd'],
    'b': ['a', 'd'],
    'c': ['a', 'e'],
    'd': ['a', 'b'],
    'e': ['c'],
    'f': ['g'],
    'g': ['f']
};

let desc = 'two hop path 1';
let actual = getPath(graph, 'a', 'e');
console.log(actual);




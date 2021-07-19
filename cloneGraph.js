/**
 * // Definition for a Node.
 **/
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
/**
 * @param {Node} node
 * @return {Node}
 */

const dfs = (map, graph) => {
    let node = new Node(graph.val, []);
    map.set(graph, node);
    for (let neighbor of graph.neighbors) {
        if(!map.has(neighbor)) {
            dfs(map, neighbor);
        }
        node.neighbors.push(map.get(neighbor));
    }
}
var cloneGraph = function (graph) {
    let map = new Map();
    dfs(map, graph);
    return map.get(graph);
};

adjList = [[2, 4], [1, 3], [2, 4], [1, 3]]
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4)
node1.neighbors.push(node2);
node1.neighbors.push(node4);
node2.neighbors.push(node3);
node2.neighbors.push(node1);
node3.neighbors.push(node2);
node3.neighbors.push(node4);
node4.neighbors.push(node1);
node4.neighbors.push(node4);
let graph = node1;
console.log(cloneGraph(graph))

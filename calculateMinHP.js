// /**
//  * @param {number[][]} dungeon
//  * @return {number}
//  */
// class Graph {
//     nodes = [];
//     map = new Map();
//     createOrGetNode(value) {
//         if (!this.map.has(value)) {
//             let node = new GraphNode(value);
//             this.nodes.push(node)
//             this.map.set(value, node);
//         }
//         return this.map.get(value);
//     }
//     getNodes() {
//         return this.nodes;
//     }
//     addEdge(startVal, endVal) {
//         let start = this.createOrGetNode(startVal);
//         let end = this.createOrGetNode(endVal);
//         start.addNeighbor(end);
//     }
// }
// class GraphNode {
//     children = [];
//     map = new Map();
//     val = 0;
//     constructor(val) {
//         this.val = val;
//     }
//     addNeighbor(node) {
//         if (!this.map.has(node.getVal())) {
//             this.map.set(node.getVal(), node);
//             this.children.push(node);
//         }
//     }
//     getVal() {
//         return this.val;
//     }
//     getChildren() { return this.children }
// }

// const buildGraph = (matrix) => {
//     let graph = new Graph();
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             graph.createOrGetNode(matrix[i][j]);
//             matrix[i] && matrix[i][j + 1] ? graph.addEdge(matrix[i][j], matrix[i][j + 1]) : null;
//             matrix[i + 1] && matrix[i + 1][j] ? graph.addEdge(matrix[i][j], matrix[i + 1][j]) : null;
//         }
//     }
//     return graph;
// }
// const calculateMinimumHP = function (dungeon) {
//     if (!dungeon)
//         return 0;
//     let graph = buildGraph(dungeon);
//     let final = 0;
//     let nodes = graph.getNodes();
//     let q = [];
//     q.push(nodes[0]);
//     let visited = [];
//     while(q != null) {
//         let n = q.shift();
//         visited.push(n);
//         if(n && n.children !== null) {
//             for(let i = 1; i <  n.children.length; i++) {
//                 if(!visited[n.children[i]]) {
//                     if(n.children[i-1].val < 0 && n.children[i] < 0) {
//                         final += Math.max(n.children[i-1], n.children[i+1]);
//                     } else {
//                         final += Math.min(n.children[i-1], n.children[i]);
//                     }
//                     q.push(n.children[i].children);
//                     q.push(n.children[i - 1].children);
//                     visited.push(n.children[i]);
//                     visited.push(n.children[i - 1]);
//                 }
//             }
//         }
//     }
//     return final;
// };

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
 var calculateMinimumHP = function(dungeon) {
    if(!dungeon)
        return 0;
    return dp(dungeon, 0,0);
};

const dp = (dungeon,i,j, memo = {}) => {
    let m = dungeon.length;
    let n = dungeon[0].length;
    let key = [i,j].join(',');
    if(key in memo )
        return memo[key];
    if(i === m || j === n) {
        return Infinity;
    }
    if(i === m -1 && j === n - 1 )
        return (dungeon[i][j] <= 0) ? -dungeon[i][j] + 1 : 1;
    let right = dp(dungeon, i, j + 1, memo);
    let down = dp(dungeon, i + 1, j, memo);
    let finalval = Math.min(right, down) -  dungeon[i][j];
    
    memo[key] = finalval <= 0 ? 1 : finalval;
    return memo[key];
}

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]));
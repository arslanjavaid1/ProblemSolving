let shortestDistance = (distances, visited) => {
    let shortest = null;   
    for(let distance in distances) {
        let isShortest = shortest === null || distances[distance] < distances[shortest];
        if(isShortest && !visited.includes(distance)) {
            shortest = distance;
        }
    }
    return shortest;
}

let findShortestPath = (graph, startNode, endNode) => {
    let distances = {};
    distances[endNode] = 'Infinity';
    distances = Object.assign(distances, graph[startNode]);
    let visited = [];
    let parents = {endNode : null};
    for(let child in graph[startNode]) {
        parents[child] = startNode;
    }
    let node = shortestDistance(distances, visited);
    while(node) {
        let distance = distances[node];
        let children = graph[node];
        for(let child in children) {
            if(String(child) === String(startNode)) {
                continue
            } else {
                let newDistance = distance + children[child];
                if(!distances[child] || distances[child] > newDistance) {
                    distances[child] = newDistance;
                    parents[child] = node;
                }
            }
        }
        visited.push(node);
        node = shortestDistance(distances, visited);
    }
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while(parent) {
        shortestPath.push(parent);
        parent = parents[parent];
    }
    shortestPath.reverse();
    let result = {
        distance: distances[endNode],
        path: shortestPath
    }
    return result
}




let graph = {
	start: { A: 5, B: 2 },
	A: { start: 1, C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, end: 3 },
	D: { ende: 1 },
	end: {},
};  

console.log(findShortestPath(graph, "start", "end"));

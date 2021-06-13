class GraphNode {
    constructor(label) {
      this.label = label;
      this.neighbors = new Set();
      this.color = null;
    }
  }
  
  function colorGraph(graph, colors) {
      graph.forEach(node => {
        if(node.neighbors.has(node))
            throw new Error ("loop");

        const illegalColors = new Set();
        node.neighbors.forEach(neighbors => {
            if(neighbors.color !== null)
                illegalColors.add(neighbors.color); 
        });
        for(let i = 0; i < colors.length; i++) {
            let color = colors[i];
            if(!illegalColors.has(color)) {
                node.color = color;
                break;    
            }
        }
      })    
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
  
  let graph = [];
  {
    const nodeA = new GraphNode('A');
    const nodeB = new GraphNode('B');
    const nodeC = new GraphNode('C');
    const nodeD = new GraphNode('D');
    nodeA.neighbors.add(nodeB);
    nodeB.neighbors.add(nodeA);
    nodeB.neighbors.add(nodeC);
    nodeC.neighbors.add(nodeB);
    nodeC.neighbors.add(nodeD);
    nodeD.neighbors.add(nodeC);
    graph = [nodeA, nodeB, nodeC, nodeD];
  }
  console.log(graph);
  colorGraph(graph, colors);
  console.log(validateGraphColoring(graph));
  function validateGraphColoring(graph) {

    const maxDegree = Math.max(...graph.map(node => node.neighbors.size));
  
    const colorsUsed = new Set();
  
    graph.forEach(node => {
      colorsUsed.add(node.color);
    });
  
    if (colorsUsed.has(null)) {
      return false;
    }
  
    if (colorsUsed.size > maxDegree + 1) {
      return false;
    }
  
    let badEdges = 0;
  
    graph.forEach(node => {
      node.neighbors.forEach(neighbor => {
        if (neighbor.color === node.color) {
          badEdges += 1;
        }
      });
    });
  
    if (badEdges > 0) {
      return false;
    }
  
    return true;
  }
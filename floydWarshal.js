const generateGraph = (n) => {
    let mat = Array(n).fill(Infinity).map(()=> Array(n).fill(Infinity));
    for (let i = 0; i < n; i++)
     mat[i][i] = 0;
     return mat;
}



let n = 7;
let graph = generateGraph(n);
graph[0][1] = 2;
graph[0][2] = 5;
graph[0][6] = 10;
graph[1][2] = 2;
graph[1][4] = 11;
graph[2][6] = 2;
graph[6][5] = 11;
graph[4][5] = 1;
graph[5][4] = -2;




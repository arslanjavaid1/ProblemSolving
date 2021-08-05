const minimumIsland = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let count = Infinity;
    let visited = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ( grid[i][j] === 'L') {
                count = Math.min(dfs(grid, i, j, visited), count)
            }
        }
    }
    return count;
};

const dfs = (grid, i, j, visited) => {
    let key = [i, j].join(",");
    if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === 'W' || visited[key]) return 0;
    visited[key] = true;
    grid[i][j] = 'W'
    let count =  1;
    count += dfs(grid, i + 1, j, visited)
    count += dfs(grid, i, j + 1, visited)
    count += dfs(grid, i - 1, j, visited)
    count += dfs(grid, i, j - 1, visited)
    return count;
}



const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

console.log(minimumIsland(grid)); // -> 3
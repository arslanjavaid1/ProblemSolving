/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let max = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j));
            }
        }
    }
    return max;
};

const dfs = (grid, i, j) => {
    if(i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === 0) {
        return 0;
    }
    grid[i][j] = 0;
    return 1+ dfs(grid, i + 1, j) + dfs(grid, i, j + 1) + dfs(grid, i - 1, j) +  dfs(grid, i, j - 1);
}
let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid))
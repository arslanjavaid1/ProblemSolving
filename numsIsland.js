/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let visited = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === '1') {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
};

const dfs = (grid, i, j) => {
    if(i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] === '0') {
        return;
    }
    grid[i][j] = '0';

    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
}

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  console.log(numIslands(grid));
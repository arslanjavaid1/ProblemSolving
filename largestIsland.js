/**
 * @param {number[][]} grid
 * @return {number}
 * 827. Making A Large Island
Hard

*/
 var largestIsland = function(grid) {
    const map = new Map();
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const dfs = (r, c, idx) => {
        let count = 1;
        grid[r][c] = idx;
        for(let dir of dirs) {
            const [r1, c1] = [r+dir[0], c+dir[1]];
            if(r1 < grid.length && c1 < grid[0].length && r1 >= 0 && c1 >= 0 && grid[r1][c1] === 1) {
                count += dfs(r1, c1, idx);
            }
        }
        return count;
    };
    let result = -1;
    let idx = 2;
    for(let i = 0 ; i < grid.length; i++) {
        for(let j = 0 ; j < grid[0].length; j++) {
            if(grid[i][j] === 1) {
                map.set(idx, dfs(i, j, idx));
                result = Math.max(result, map.get(idx));
                idx++;
            }
        }
    }
    console.log(map);
    for(let i = 0 ; i < grid.length; i++) {
        for(let j = 0 ; j < grid[0].length; j++) {
            if(grid[i][j] === 0) {
                const seen = new Set();
                let count = 0;
                for(let dir of dirs) {
                    const [r1, c1] = [i+dir[0], j+dir[1]];
                    if(r1 < grid.length && c1 < grid[0].length && r1 >= 0 && c1 >= 0 && grid[r1][c1] > 1 && !seen.has(grid[r1][c1])) {
                        count += map.get(grid[r1][c1]);
                        seen.add(grid[r1][c1]);
                    }
                }
                result = Math.max(result, count+1);
            }
        }
    }
    return result;
};
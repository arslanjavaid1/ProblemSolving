const gridTraveler = (n, m) => {
    let grid = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));
    grid[1][1] = 1;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i + 1 <= n) grid[i + 1][j] += grid[i][j];
            if (j + 1 <= m) grid[i][j + 1] += grid[i][j];
        }
    }
    return grid[m][n];
}
console.log(gridTraveler(3, 3));

/*

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
*/
var updateMatrix = function (matrix) {
    const rows = matrix.length;
    if (rows == 0)
      return matrix;
    const cols = matrix[0].length;
    // const dist = new Array(rows).fill(0).map(() => new Array(cols).fill(Number.MAX_VALUE));
    const dist = [...Array(rows)].map(x => Array(cols).fill(Number.MAX_VALUE))
    const q = [];
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          dist[i][j] = 0;
          q.push([i, j]); //Put all 0s in the queue.
        }
      }
    }
  
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (q.length) {
      const [i, j] = q.shift();
      dir.map(([r, c]) => {
        const new_r = i + r, new_c = j + c;
        if (new_r >= 0 && new_c >= 0 && new_r < rows && new_c < cols) {
          if (dist[new_r][new_c] > dist[i][j] + 1) {
            dist[new_r][new_c] = dist[i][j] + 1;
            q.push([new_r, new_c]);
          }
        }
      });
    }
    return dist;
  }
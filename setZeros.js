/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let firstCol = 1;
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] === 0) firstCol = 0;
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] === 0){
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 1; j--) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) 
                matrix[i][j] = 0;
        }
        if(firstCol === 0) matrix[i][0] = 0;
    }
    return matrix
}
let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
console.log(setZeroes(matrix))
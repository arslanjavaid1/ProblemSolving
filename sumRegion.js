/**
 * @param {number[][]} matrix
 */
let matrix;
var NumMatrix = function (matrix) {
    this.matrix = matrix
    if (matrix.length === 0) return;
    let left, up, diag = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            left = matrix[i] && matrix[i][j-1] ? matrix[i][j - 1] : 0;
            up = matrix[i - 1] && matrix[i - 1][j] ? matrix[i - 1][j] : 0;
            diag = matrix[i - 1] && matrix[i-1][j-1] ? matrix [i - 1] [j - 1] : 0;
            matrix[i][j] += left+up-diag;
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = matrix[row2][col2];
    let left = matrix[row2] [col1 - 1] || 0;
    let up = matrix[row1 - 1][col2] || 0;
    let diag = matrix[row1 -1][col1 - 1] || 0;
    return sum - left - up + diag;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]];
var obj = new NumMatrix(matrix)
let [row1,col1,row2,col2] = [2, 1, 4, 3];
[row1,col1,row2,col2] = [1, 1, 2, 2];
[row1,col1,row2,col2] = [1, 2, 2, 4]
var param_1 = obj.sumRegion(row1, col1, row2, col2)
console.log(param_1);
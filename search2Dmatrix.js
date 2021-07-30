/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length === 0 || matrix[0].lenght === 0 )
        return false;
    
    let rows = 0;
    let cols = matrix[0].length -1;
    while(cols  >= 0 && rows <= matrix.length - 1) {
        if(matrix[rows][cols] === target)
            return true;
        else if(matrix[rows][cols] > target) {
            cols--;
        } else if(matrix[rows][cols] < target) {
            rows++;
        }
    }
    return false;
}
let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
console.log(searchMatrix(matrix, target))
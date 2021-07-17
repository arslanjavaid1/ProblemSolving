/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0)
        return []
    let rowBeg = 0, rowEnd = matrix.length - 1, colBeg = 0, colEnd = matrix[0].length - 1, res = [];
    while (rowBeg <= rowEnd && colBeg <= colEnd) {
        for (let i = colBeg; i <= colEnd; i++)
            res.push(matrix[rowBeg][i])
        rowBeg++;
        for (let i = rowBeg; i <= rowEnd; i++)
            res.push(matrix[i][colEnd])
        colEnd--;
        if (rowBeg <= rowEnd) {
            for (let i = colEnd; i >= colBeg; i--)
            res.push(matrix[rowEnd][i])
            rowEnd--
        }
        if (colBeg <= colEnd) {
            for (let i = rowEnd; i >= rowBeg; i--)
            res.push(matrix[i][colBeg])
            colBeg++
        }
        
    }
    return res;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
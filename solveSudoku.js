/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];


var solveSudoku = function (board) {
    backtrack(board, 0, 0);
}
const isValid = (board, row, col, c) => {
    let blkrow = Math.ceil((row / 3)) * 3;
    let blkcol = Math.ceil((col / 3)) * 3;
    for(let i = 0; i < 9; i++) {
        if(board[i][col] !== '.' && board[i][col] === c) return false; //check row
        if(board[row][i] !== '.' && board[row][i] === c) return false; //check column
        if(board[3 * Math.trunc(row / 3) + Math.trunc(i / 3)][ 3 * Math.trunc(col / 3) + i % 3] !== '.' && 
board[3 * Math.trunc(row / 3) + Math.trunc(i / 3)][3 * Math.trunc(col / 3) + i % 3] === c) return false; //check 3*3 block
    }

    return true;
}

const backtrack = (board, row, col) => {
    for (let i = row; i < 9; i++, col = 0) { 
        for (let j = col; j < 9; j++) {
            if (board[i][j] !== '.') continue;
            for (let k = 1; k <= 9; k++) {
                if (isValid(board, i, j, k)) {
                    board[i][j] = k.toString();
                    if (backtrack(board, i, j+1))
                        return true;
                    else
                        board[i][j] = '.';
                }
            }
            return false;
        }
    }
    return true;
}
solveSudoku(board)
console.log(board);
const b2 = [["5", "3", "4", "6", "7", "8", "9", "1", "2"], ["6", "7", "2", "1", "9", "5", "3", "4", "8"], ["1", "9", "8", "3", "4", "2", "5", "6", "7"], ["8", "5", "9", "7", "6", "1", "4", "2", "3"], ["4", "2", "6", "8", "5", "3", "7", "9", "1"], ["7", "1", "3", "9", "2", "4", "8", "5", "6"], ["9", "6", "1", "5", "3", "7", "2", "8", "4"], ["2", "8", "7", "4", "1", "9", "6", "3", "5"], ["3", "4", "5", "2", "8", "6", "1", "7", "9"]]
if (board === b2)
    console.log(true)
else console.log(false)
const nQueens = (n) => {
    const result = [];
    const board = Array(n).fill('.').map(() => Array(n).fill('.'));
    for (let i = 0; i < board.length; i++) {
        board[i] = Array(n).fill('.');
    }
    const cols = Array(n).fill(false);
    const diagonalAdd = new Set();
    const diagonalSubtract = new Set();


    const isvalid = (row, col) => {
        if (cols[col] || diagonalSubtract.has(row - col) ||  diagonalAdd.has(row + col)) {
            return false
        }
        return true;
    }
    const helper = (row) => {
        if (row === n) {
            result.push(board.map((row) => row.join('')));
            return;
        }
        for (let i = 0; i < n; i++) {
            if (isvalid(row, i)) {
                board[row][i] = 'Q';
                cols[i] = true;
                diagonalSubtract.add(row - i);
                diagonalAdd.add(row + i);
                helper(row + 1);
                cols[i] = false;
                diagonalSubtract.delete(row - i);
                diagonalAdd.delete(row + i);
                board[row][i] = '.';
            }
        }

    }
    helper(0);
    return result;
}
 console.log(nQueens(8))
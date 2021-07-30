/**
 * @param {character[][]} board
 * @return {number}
 * 419. Battleships in a Board
Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2
Input: board = [["."]]
Output: 0

 */
var countBattleships = function(board) {
    if(board.length === 0) return 0;
    let m =  board.length;
    let n = board[0].length;
    let count = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === 'X') {
                dfs(board, i, j);
                count++;
            }
        }
    }
    return count;
};
const dfs = (board, i, j) => {
    if(i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] === '.') return;
    board[i][j] = '.';
    if(i < board.length) dfs(board, i + 1, j);
    if(j < board[0].length) dfs(board, i, j + 1);
    if(i > 0) dfs(board, i - 1, j);
    if(j > 0) dfs(board, i, j - 1);
}

const board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]];
console.log(countBattleships(board));
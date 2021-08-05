/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 79. Word Search
    Medium
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 */
const dfs = (board, word, i, j, idx) => {
    if (idx === word.length) return true;
    if (i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] !== word.charAt(idx)) return false;
    let c = board[i][j];
    board[i][j] = '*';
    let exist = dfs(board, word, i + 1, j, idx + 1) || dfs(board, word, i, j + 1, idx + 1) || dfs(board, word, i - 1, j, idx + 1) || dfs(board, word, i, j - 1, idx + 1);
    board[i][j] = c;
    return exist;
}
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, i, j, 0))
                return true;
        }
    }
    return false;
};
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED";
board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
word = "SEE"
board = [["a", "b"]], word = "ba";
board = [["a"]], word = "a";
console.log(exist(board, word))
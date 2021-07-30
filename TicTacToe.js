/**
 * Initialize your data structure here.
 * @param {number} n
 */
 var TicTacToe = function(n) {
    this.rows = {};
    this.columns = {};
    this.n = n;
    this.diagonal = 0;
    this.antiDiagonal = 0;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    if(this.isWin(player, row, col)) {
        return player;
    }
    return 0;
};

TicTacToe.prototype.isWin = function(player, row, col) {
    player = player === 1 ? 1 : -1;
    this.rows[row] = player + (this.rows[row] || 0);
    this.columns[col] = player + (this.columns[col] || 0);
    if(row === col) {
        this.diagonal += player;
    }
    if(row + col === this.n - 1) {
        this.antiDiagonal += player;
    }
    if(Math.abs(this.rows[row]) === this.n) return true;
    if(Math.abs(this.columns[col]) === this.n) return true;
    if(Math.abs(this.diagonal) === this.n) return true;
    if(Math.abs(this.antiDiagonal) === this.n) return true;
    return false;
}
/** 
 * Your TicTacToe object will be instantiated and called as such:
*/ 
var obj = new TicTacToe(n)
var param_1 = obj.move(row,col,player)

 
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 function TrieNode(val) {
    this.val = val;
    this.children = {};
    this.endOfWord = false;
    this.parent = null;
    this.word = ""
}
const createTrie = (words) => {
    const trie = new Trie();
    words.forEach(element => {
        trie.insertNode(element);
    });
    return trie;
}
let result;
var findWords = function (board, words) {
    if (board.length === 0) return [];
    const trie = createTrie(words);
    result = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            backtrack(trie.root, i, j, result, board)
        }
    }
    return result;
};

const backtrack = (trie, i, j, result, board) => {
    let c = board[i][j];
    if(c === '*' || trie.children[c] === null || trie.children[c] === undefined) return;
    trie = trie.children[c];
    if(trie.endOfWord && trie.word !== "") {
        result.push(trie.word);
        trie.word = "";
    }
    board[i][j] = "*";
    if(i > 0 ) backtrack(trie, i - 1, j, result, board);
    if(j > 0 ) backtrack(trie, i, j - 1, result, board);
    if(i < board.length - 1 ) backtrack(trie, i + 1, j, result, board);
    if(j < board[0].length - 1 ) backtrack(trie, i, j + 1, result, board);
    board[i][j] = c;
}

const Trie = function () {
    this.root = new TrieNode('*');
    this.insertNode = function (word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode(word[i]);
                node.children[word[i]].parent = node;
            }
            node = node.children[word[i]];

            if (i === word.length - 1) {
                node.endOfWord = true;
            }
        } 
        node.word = word;
    }
}

let board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], words = ["oath", "pea", "eat", "rain"];
console.log(findWords(board, words));
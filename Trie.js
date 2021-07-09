const TrieNode = function (key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.endOfWord = false;
    this.getWord = function () {
        let output = [];
        let node = this;
        while(node !== null) {
            output.unshift(node.key)
            node = node.parent;
        }
        return output.join('');
    }
}

const Trie = function() {
    this.root = new TrieNode(null);
    this.insert = function(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if(!node.children[word[i]]) {
                node.children[word[i]] = new TrieNode(word[i]);
                node.children[word[i]].parent = node;
            }
            node = node.children[word[i]];

            if(i === word.length -1) {
                node.endOfWord = true;
            }
        }
    }
    this.contains = function(word) {
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(node.children[word[i]]) {
                node = node.children[word[i]];
            } else {
                return false;
            }

        }
        return node.endOfWord;
    }
    this.find = function(word) {
        let node = this.root;
        let output = [];
        for (let i = 0; i < word.length; i++) {
            if(node.children[word[i]]) {
                node = node.children[word[i]];  
            } else {
                return output;
            }
        }
        findAllWords(node, output);
        return output;
    }
    const findAllWords = function(node, output) {
        if(node.endOfWord) {
            output.unshift(node.getWord());
        }
        for(let child in node.children) {
            findAllWords(node.children[child], output);
        }
    }
    this.remove = function(word) {
        let node = this.root;
        if(!word) return;
        const removeWord = (node, word) => {
            if(node.endOfWord && node.getWord() === word) {
                let hasChildren = Object.keys(node.children).length > 0;
                if(hasChildren) {
                    node.endOfWord = false;
                } else {
                    node.parent.children = {};
                }
                return true;
            }
            for(let key in node.children) {
                removeWord(node.children[key], word)
            }
            return false;
        }
        removeWord(node, word)
    }
}

const trie = new Trie();

// insert few values
trie.insert("Cat");
trie.insert("Mat");
trie.insert("Ca");
trie.insert("tM");
trie.insert("at");
trie.insert("C");
trie.insert("Dog");
trie.insert("og");
trie.insert("Do");
console.log(trie.find("CatMat"))


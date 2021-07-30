/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  	constructor() {
    }
    
    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        const dfs = (root, arr) => {
            if(root === null) {
                return;
            }
            arr.push(root.val);
            if(root.children) {
                arr.push('[');
                for(let i = 0; i < root.children.length; i++) {
                    dfs(root.children[i], arr);
                }
                arr.push(']');
            }
        };
        const arr = [];
        dfs(root, arr);
        return arr.join('-');
    };
	
    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        if(!data) {
            return null;
        }
        
        const arr = data.split('-');
        //console.log(arr);
        const dfs = (arr) => {
            //console.log(arr);
            if(arr.length === 0) {
                return null;
            }

            if(arr[0] === '[' && arr[1] === ']') {
                arr.shift();
                arr.shift();
                return null;
            }
            if(arr[0] !== '[' && arr[0] !== ']') {
                const val = new Node(arr.shift(), []);
                if(arr[0] === '[' && arr[1] === ']') {
                    arr.shift();
                    arr.shift();
                    return val;
                }
                if(arr[0] === '[' && arr[1] !== ']' && arr[1] !== '[') {
                    arr.shift();
                    while(arr.length !== 0 && arr[0] !== ']') {
                        const child = dfs(arr);
                        //console.log(child);
                        if(child !== null) {
                            val.children.push(child);
                        }
                    }
                    arr.shift();
                    return val;
                }
            }
        };
        const root = dfs(arr);
        //console.log(root);
        return root;
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));


function TreeNode(val) {
     this.val = val;
   this.left = this.right = null;
 }
 

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const traverse  = (root, str) => {
    if(root === null)
        str += "null,";
    else {
        str += root.val.toString() + "," ;
        str = traverse(root.left, str);
        str = traverse(root.right, str); 
    }
    return str;
}
 var serialize = function(root) {
    return traverse(root, '')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

const traverseDes = (data) => {
    if(data[0] === 'null') {
        data.splice(0,1);
        return null;
    } 
    let root = new TreeNode(parseInt(data[0]));
    data.splice(0,1);
    root.left = traverseDes(data);
    root.right = traverseDes(data);
    return root;
}
var deserialize = function(data) {

    let treeNodes = data.split(',');
    return traverseDes(treeNodes);

};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(6);
root.right.left.right = new TreeNode(7);

console.log(deserialize(serialize(root)));
 

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder && !inorder)
        return null;
    const map = new Map();
    for(let i = 0; i < inorder.length; i++) map[inorder[i]] = i;
    
    return recursiveTreeBuilder(0, preorder.length -1, map, preorder,inorder);
};

const recursiveTreeBuilder = (start, end, map, preorder, inorder) => {
    if(start > end) return null;
    let rootVal =  preorder.shift();
    let tree = new TreeNode(rootVal);
    if(preorder.length > 0) {
        tree.left = recursiveTreeBuilder(start, map[rootVal] - 1, map, preorder, inorder);
        tree.right = recursiveTreeBuilder(map[rootVal] + 1, end, map, preorder, inorder);
}
return tree;
}
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
var largestBSTSubtree = function(root) {
    if(!root) {
        return 0;
    }
    let max = 0;
    let recurse = function(root) {
        if(!root) {
            return {size: 0, min: Infinity, max: -Infinity};
        }
   
        let left = recurse(root.left);
        let right = recurse(root.right);
        
        if(left.size === -1 || right.size === -1 || root.val <= left.max || root.val >= right.min) {
            return {size: -1, min: 0, max: 0};
        }
        let size = left.size + right.size + 1;
        max = Math.max(size, max);
        return {size: size, min: Math.min(left.min, root.val), max: Math.max(right.max, root.val)};
    }
    
    recurse(root);
    return max;
};
/*
Input: root = [10,5,15,1,8,null,7]
Output: 3
Given the root of a binary tree, find the largest subtree, which is also a Binary Search Tree (BST), where the largest means subtree has the largest number of nodes.

A Binary Search Tree (BST) is a tree in which all the nodes follow the below-mentioned properties:

The left subtree values are less than the value of their parent (root) node's value.
The right subtree values are greater than the value of their parent (root) node's value.
Note: A subtree must include all of its descendants.

Follow up: Can you figure out ways to solve it with O(n) time complexity?

*/
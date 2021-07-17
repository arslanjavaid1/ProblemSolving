/**
 * Definition for a binary tree node.
 **/function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let q = [];
    q.push(root);
    let final = [];
    while (q.length !== 0) {
        let level = Array();
        let l = q.length;
        for (let i = 0; i < l; i++) {
            let node = q.shift();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
            level.push(node.val);
        }
        final.push(level);
    }
    let count = 0;
    let finalL =  final.length;
    while( count < finalL) {
        if(count % 2 !== 0)
            final[count] = final[count].reverse();
        count++;
    }
    return final;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log(zigzagLevelOrder(root));
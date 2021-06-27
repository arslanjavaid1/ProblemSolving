function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
 };
var ans = null;
 var lowestCommonAncestor = function(root, p, q) {
    if(!root)
        return null
    LCA(root, p, q)
    return ans;
};

var LCA = (root, p,q) => {
    if(!root)
        return false;
    let mid = root.val === p.val || root.val === q.val ? 1 : 0;
    let l = LCA(root.left,p,q) ? 1 : 0;
    let r = LCA(root.right,p,q) ? 1 : 0;
    if(mid + l + r >= 2)
        ans = root;
    return (mid + l + r > 0);
}
var root = new Node(3);
root.left = new Node(5);
root.right =            new Node(1);
root.left.left =        new Node(6);
root.left.right =       new Node(2);
root.right.left =       new Node(0);
root.right.right =      new Node(8);
root.left.right.left =  new Node(7);
root.left.right.right = new Node(4);
var p = new Node(5)
var q = new Node(4)
console.log(lowestCommonAncestor(root,p,q));
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
 };

 var lowestCommonAncestor = function(root, p, q) {
    if(!root)
        return null
    return LCA(root, p, q)
};

var LCA = (root, p,q) => {
    if(!root) return false;
    let lcL = false;
    let lcR = false;
    if (root.left)lcL = LCA(root.left,p,q);
    if (root.right) lcR = LCA(root?.right,p,q);
    if(root.val === p.val || root.val === q.val)
     return true;
    if(lcL || lcR)
        return true;
     if(lcL && lcR)
        return root;
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
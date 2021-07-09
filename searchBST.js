function Node(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
let ans = null;
 var searchBST = function(root, val) {
    if(!root)
        return null;
    if(root.val === val)
        return root;
    search(root,val)
    return ans;
};

var search = (root, val) => {
    if(!root)
        return null;
    let current = root.val === val ? 1 : 0;
    let left  = search(root.left,val) ? 1 : 0;
    let right  = search(root.right,val) ? 1 : 0;
    if(current === 1) {
        ans = root;
    }
    else return (current + left + right === 0)
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log(searchBST(root,  2));
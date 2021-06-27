function Node(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
};
const operation = (val1,val2, expression) => {
    if( expression === '+')
        return val1 + val2;
    if( expression === '-')
        return val1 - val2;
    if( expression === '*')
        return val1 * val2;
    if( expression === '/')
        return val1 / val2;
}

const evaluateExpression = (root) => {
    if(!root)
        return 0;
    if(!root.left && !root.right) return root.val;
    let left = evaluateExpression(root.left);
    let right = evaluateExpression(root.right);
    return operation(left, right, root.val)
}
root = new Node('+');
root.left = new Node('*');
root.right = new Node('-');
root.left.left = new Node(5);
root.left.right = new Node(4);
root.right.left = new Node(100);
root.right.right = new Node("/");
root.right.right.left = new Node(20);
root.right.right.right = new Node(2);

console.log(evaluateExpression(root))
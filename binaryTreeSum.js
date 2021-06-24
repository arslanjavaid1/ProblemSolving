function Node(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
 };
 const binary = (root) => {
     return binaryTreeSum(root).average;
 }
const binaryTreeSum = (root) => {
    if(!root) return {sum : 0,count: 0, average:false };
    let left = binaryTreeSum(root.left);
    let right = binaryTreeSum(root.right);
    let sum = left.sum + right.sum + root.val;
    let count = left.count + right.count + 1;
    let average = left.average || right.average;
 if(left.count > 0 || right.count > 0) {
        const averageWithoutParent = (left.sum + right.sum) / (left.count + right.count);
        average = average || averageWithoutParent === root.val;
    }
    return {sum, count, average};
}


let root = new Node(5);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(3);
root.left.left.left = new Node(2);
console.log(binary(root))
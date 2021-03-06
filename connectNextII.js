/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null
    let q = [root]

    while (q.length > 0) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()

            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }

        for (let i = 0; i < q.length; i++) {
            q[i].next = q[i + 1]
        }
    }

    return root
};
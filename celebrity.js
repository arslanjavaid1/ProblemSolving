// Optimal Solution
/**
 * @param {integer} n Total people
 * @return {integer} The celebrity
 */
const knows = (i, j) {
    return i === j;
}
const celebrity = (n) => {
    let candidate = 0;
    // rule out n-1 people
    for (let i = 0; i < n; i++) {
        if (candidate == i) continue;
        if (knows(candidate, i)) {
            candidate = i;
        }
    }

    // check if this candidate is the celebrity
    for (let i = 0; i < n; i++) {
        if (candidate == i) continue;
        if (knows(candidate, i) || !knows(i, candidate)) {
            return -1;
        }
    }
    return candidate;
};
let graph = [[1, 1, 0], [0, 1, 0], [1, 1, 1]]
console.log(celebrity(graph))
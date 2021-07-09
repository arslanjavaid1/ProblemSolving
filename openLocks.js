/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    if (deadends.includes('0000'))
        return -1;
    if (target === '0000')
        return 1;
    let numbers = [0, 0, 0, 0];
    let min = Infinity;
    let count = 0;
    let visited = [];
    const backtrack = (count, visited, numbers, index, num) => {
            if (numbers.join('') === target) {
                min = Math.min(min, count);
                return;
        }
        if (deadends.includes(numbers.join(''))) return -1;
        for (let j = 0; j <= 9; j++) {
            for (let i = num; i < 4; i++) {
                numbers[i] = (numbers[i]  + 1) % 10;
                backtrack(count + 1, visited, numbers, index + 1, i+1);
                numbers[i] = 0;
            }
        }
    }

    backtrack(count, visited, numbers, 0, 0);
    return min ? min : -1;
};
let deadends =  ["0201","0101","0102","1212","2002"], target = "0202";
//let deadends = ["8888"], target = "0009"
deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
console.log(openLock(deadends, target))
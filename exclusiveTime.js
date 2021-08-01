/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function(n, logs) {
    const sums = new Array(n).fill(0);
    const stack = [];
    let prevTime;
    for (const log of logs) {
      const details = log.split(':');
      const id = details[0];
      const point = details[1];
      const time = parseInt(details[2]);
      
      if (point == 'start') {
        if (stack.length) sums[stack[stack.length - 1]] += (time - prevTime);
        stack.push(id);
        prevTime = time;
      } else { 
        // stop
        if (stack.length) sums[stack[stack.length - 1]] += (time - prevTime + 1);
        stack.pop();
        prevTime = time + 1;
      }
      
    }
    return sums;
  };
let s = "zzazz";
s = "mbadm";
s = "leetcode";
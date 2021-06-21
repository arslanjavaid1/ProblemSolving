
const fs = require('fs').promises;

const praseLines  = async () => {
    const data = await fs.readFile('./input', {encoding:'utf-8'});
    return data.split('\n');
}

const adventDay1 = async () => {
    const lines = await praseLines();
    const numbers = lines.map(Number);
    if (numbers.length == 0)
        return 0;
    const set = new Set();
    for(num of numbers) {
        const diff = 2020 - num;
        if(set.has(diff))
        {
            return num * diff;
        }
        else {
            set.add(num);
        }
    }
}
adventDay1().then(console.log);
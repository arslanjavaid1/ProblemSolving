
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
    const map = new Map();
    for(let i = 0 ; i < numbers.length; i++) {
        for(j = 1; j< numbers.length; j++){
            map[numbers[i]+numbers[j]] =  numbers[i] + ',' + numbers[j];
        }   
    }
    for(number of numbers) {
        const diff = 2020 - number;
        if(map[diff]) {
            const values = map[diff].split(',');
            const v1 = values[0];
            const v2 = values[1];
            return Number.parseInt(v1) *  Number.parseInt(v2) * number;
        }
    }
}
adventDay1().then(console.log);

const fs = require('fs').promises;

const praseLines = async () => {
    const data = await fs.readFile('./inputDay2', { encoding: 'utf-8' });
    return data.split('\n');
}

const adventDay2 = async () => {
    const lines = await praseLines();

    if (lines.length == 0)
        return 0;
    let validPass = 0;
    for (line of lines) {
        const [limit, letter, pass] = line.split(" ");
        const [lowerLimit, upperLimit] = limit.split("-");
        const [finalLetter] = letter.split(":");
        const occurance = pass.split(finalLetter).length - 1 ;
        if (occurance>= lowerLimit && occurance <= upperLimit)
            validPass++;
    }
    return validPass;
}
adventDay2().then(console.log);
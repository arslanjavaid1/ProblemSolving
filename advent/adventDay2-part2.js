
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
        // const lowerIndex = pass.indexOf(finalLetter);
        // newPass = pass.slice(lowerIndex);
        // const upperIndex = newPass.indexOf(finalLetter);
        if((pass[lowerLimit - 1] === finalLetter && pass[upperLimit - 1] !== finalLetter) || (pass[lowerLimit - 1] !== finalLetter && pass[upperLimit - 1] === finalLetter))
            validPass++
    }
    return validPass;
}
adventDay2().then(console.log);
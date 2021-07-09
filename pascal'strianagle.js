var getRow = function (rowIndex) {
    if (rowIndex === 0)
    return [1];
    let result = Array(rowIndex + 1);
    let index = 0;
    while(index <= rowIndex) {
        result[index] = Array(index+1);
        result[index][0] = 1;
        result[index][result[index].length - 1] = 1;
        for(let i = 1; i < index; i++) {
            result[index][i] = result[index -1][i-1] + result[index -1][i];
        }
        index++;
    }
    return result[rowIndex];
};

console.log(getRow(3));

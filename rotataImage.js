var rotate = function (matrix) {
    if (matrix.length <= 1)
        return matrix
    let len = matrix.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix.map((x) => x.reverse());
};

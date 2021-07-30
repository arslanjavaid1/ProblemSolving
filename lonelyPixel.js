/**
 * @param {character[][]} picture
 * @return {number}
 */
 var findLonelyPixel = function(picture) {
    let m = picture.length, n = picture[0].length;
    let rows = new Array(m), columns = new Array(n);
    rows.fill(0);
    columns.fill(0);
    for(let i = 0; i <m; i++) {
        for(let j = 0; j< n; j++) {
            if(picture[i][j] == 'B') {
                rows[i]++;
                columns[j]++;
            }
        }
    }
    
    let result = 0; 
     for(let i = 0; i <m; i++) {
        for(let j = 0; j< n; j++) {
            if(picture[i][j] == 'B' && rows[i] == 1 && columns[j] == 1) {
                result++;
            }
        }
    }
    
    return result;
};
let picture = [["W","W","B"],["W","B","W"],["B","W","W"]]
console.log(findLonelyPixel(picture));
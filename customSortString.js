/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
 var customSortString = function(order, s) {
    let map =  new Map();
    count = 0;
    final = Array();
    for(c of order) {
        map.set(c, count);
        count++;
    }
    let n = map.size;
    for(let c of s) {
        let index = map.get(c);
        if(index === undefined) {
            index = n; n++;
        }
        if(!final[index]) final[index] = Array();
        final[index].push(c)
    }
    return final.join('').replaceAll(',', '');
};

let order = "kqep", s = 'pekeq';
console.log(customSortString(order, s));
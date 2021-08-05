/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
    if (names.length === 0) return [];
    let map = new Set();
    for (let i = 0; i < names.length; i++) {
        let index = names[i].indexOf('(');
        let indexLast = names[i].indexOf(')');
        let val = names[i].substring(index, indexLast);
        if (!map.has(names[i])) map.add(names[i]);
        else {
            let j = 1;
            while(map.has(names[i])) {
                if(!map.has(names[i]+"("+j+")")) {
                    map.add(names[i]+"("+j+")");
                    break;
                }
                j++;
            }
        }
    }
    return [...map.keys()];
};

let names = ["gta", "gta(1)", "gta", "avalon"];
names = ["kaido","kaido(1)","kaido","kaido(1)","kaido(2)"]

console.log(getFolderNames(names))
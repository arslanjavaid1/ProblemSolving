const prefixString = (s, prefix) => {
    if(!s) return [];
    s = s.toLowerCase();
    prefix = prefix.toLowerCase();
    let sArr = s.split(' ');
    let prefLength = prefix.length;
    let j = sArr.length;
    let result = [];
    let count = 0;
    for(let i = 0; i < j; i++) {
        if(sArr[i].substring(0, prefLength) === prefix) 
            result.push(count);
        count += sArr[i].length + 1;
    }
    return result
}
let s = "In the publishing of a document in a journal"
let prefix = "l";
console.log(prefixString(s, prefix))
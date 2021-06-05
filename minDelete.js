var minDeletions = function(s) {
    if (!s) return 0;
    let dict = {};
    const set = new Set();
    for(char of s ){
        dict[char] = dict[char] >= 1 ? dict[char]+1 : 1;
    }
    let deletetion = 0;
    let sorted = Object.values(dict).sort((a,b)=> b - a);
    for(let count of sorted) {
        if(!set.has(count)) set.add(count);
        else {
            while(set.has(count)) {
                count --;
                deletetion++;
            }
            if(count > 0) set.add(count);
        }
    }
    return deletetion;
};

console.log(minDeletions("aaabbccc"));
/**
 * @param {string} s
 * @return {string}
 * 394. Decode String
   Medium
 */
 var decodeString = function(s) {
    
    let s1 = [];
    let s2 = [];
    let str = "";
    let i = 0;
    while(i < s.length) {
        if(!isNaN(s[i])) {
           let num = 0; 
            while(!isNaN(s[i])) {
                   num =  num*10 + parseInt(s[i])
                   i++;
            }
            s1.push(num);
        } else if(s[i] === '[') {
            s2.push(str);
            str = "";
            i++;
        } else if(s[i] === "]") {
            let num = s1.pop();
            let s = s2.pop();
            str = `${s}${str.repeat(num)}`;
            i++
        } else {
           
            str += s[i];
            i++;
        }
    }
    
 
    
    return str;
};

let s = "3[a]2[bc]"
console.log(decodeString(s));
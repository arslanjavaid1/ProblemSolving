const generate = (seed) => {
    var pr = seed;
    return function(param) 
    {
        pr +=seed;
        return pr + param;
    }
}

let a = generate(1)
let b = generate(2)
let c = a(1) + a(2) + b(3) + b(4); 
console.log(c)

var kv =  [['Key', 'val'], ['k2', 'va']];
let map = new Map(kv);
console.log(map);
let arr = new Array(map);
console.log(arr[0]);
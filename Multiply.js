// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 0)
        return 0;
        let multiply = 1;
        A.array.forEach(element => {
            multiply *= element;
        });
        if(multiply < 0 )
            return -1;
        else if(multiply > 0)
            return 1;
        else 
            return 0;
}

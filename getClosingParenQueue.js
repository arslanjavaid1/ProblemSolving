class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(e) {
        this.elements.push(e);
    }
    dequeue() {
        return this.elements.shift();
    }
    isEmpty () {
        return this.elements.length == 0;
    }
}

function getClosingParen(sentence, openingParenIndex) {
    const q = new Queue();
    let charArr = sentence.split("");
    count = openingParenIndex - 1;
    for(let i = openingParenIndex; i < charArr.length; i++) {
        count++;
        if(charArr[i] == "("){
            q.enqueue(")");
        }
        else{
         q.dequeue();
        }
        if(q.isEmpty())
            return count;
    }
    if(!q.isEmpty())
        throw new Error();
} 

// Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => (getClosingParen('()(()', 2));
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}
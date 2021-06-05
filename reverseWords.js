function reverseWords(message) {
let start = 0;
let end = message.length - 1;
let temp;

while(start <= end){
    temp = message[start];
    message[start] = message[end];
    message[end] = temp;
    start++;
    end--;
}
start = 0;
let begin = 0;
end = message.length - 1;
while (start <= end ) {
    if( message[start + 1] == ' ' || start === end) {
        let lastChar = start;
        while (begin <= lastChar ) {
            let temp  = message[begin];
            message[begin] = message[lastChar];
            message[lastChar] = temp;
            begin++;
            lastChar --;
        }
        begin = start + 2;
    }
    start++;
}
return message;
}
input = 'thief cake'.split('');
reverseWords(input);
  
  
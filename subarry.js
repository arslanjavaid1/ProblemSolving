function subarrayCount (k, arr) {
    const result = [];
    for(let i = 0; i < arr.length - k + 1; i++) {
        let sum = 0;
        for(j = i; j < i + k; j++){
            sum += arr[j];
        }
        result.push(sum/k);
    }
    return result;
}



function slidingWindowSubarrayCount (k, arr){
    let windowSum = 0,
        windowStart = 0;
    let max = 0;
    const result = [];
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if(windowEnd >= k - 1) {
            windowSum -= arr[windowStart];
            max = Math.max(windowSum, max);
            windowStart += 1; 
        }
    }
    return max;
}

function smallestContigousSubArray (s, arr) {
    let windowSum = 0,
        windowStart = 0;
    let min = Number.MAX_VALUE;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];        
        while(windowSum >= s) {
            min = Math.min( (windowEnd - windowStart + 1) , min);
            windowSum -= arr[windowStart++];
        } 
    }
    return min;
}

const longest_substring_with_k_distinct = function(str, k) {
    // TODO: Write your code here
    let windowStart = 0,
    maxLength = 0,
    charFrequency = {};
  
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
      const rightChar = str[windowEnd];
      if(!(rightChar in charFrequency)) {
        charFrequency[rightChar] = 0;
      }
      charFrequency[rightChar] += 1;
      while(Object.keys(charFrequency).legnth > k){
        const leftChar = str[windowStart];
        charFrequency[leftChar] -= 1;
        if(charFrequency[leftChar] === 0){
          delete charFrequency[leftChar];
        }
        windowStart += 1;
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }

const fruitIntoBasket = (tree) => {
    let windowStart = 0,
    windowEnd = 0,
    map = new Map(),
    maxLength = 1;
    while(windowEnd < tree.length){
        if(map.size <= 2)  {
            map.set(tree[windowEnd], windowEnd++);
        }
        if(map.size > 2) {

            let min = tree.length - 1;
            for(let values of map.values()){
                min = Math.min(min, values);               
            };
            windowStart = min + 1;
            map.delete(tree[min])
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart);
    }
    return maxLength;
}

const longestSubStringWithoutRepeatingChars = (s) => {
    if(!s)
        return 0;
    const char = [...s];
    let windowEnd = 0,
    windowStart = 0,
    max = 0,
    map = new Map();
    while(windowEnd < char.length) {
        if(!map.has(char[windowEnd])){
            map.set(char[windowEnd], windowEnd++);
        }
        else {
            let min = char.length - 1;
            for(let values of map.values()){
                min = Math.min(min, values);               
            };
            windowStart = min + 1;
            map.delete(char[min])
        }
        max = Math.max(max, windowEnd - windowStart);
    }
    return max;
}


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 const characterReplacement = (str, k) => {
    if(!str)
    return 0;
let windowStart = 0,
    max = 0,
    maxCount = 0,
    map =  new Map();
for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        map.set(str[windowEnd], map.get(str[windowEnd]) + 1 || 1) ;
        maxCount = Math.max(maxCount, map.get(str[windowEnd]));
        while(windowEnd - windowStart + 1 - maxCount > k){
            const leftChar = str[windowStart];
            map.set (leftChar, map.get(leftChar) - 1);
            windowStart++;
        }
   max = Math.max(max, windowEnd - windowStart + 1);
}
return max;
};
let target = 7, nums = [2,3,1,2,4,3]
console.log(smallestContigousSubArray(target, nums))
//const result = fruitIntoBasket( [1, 2, 1]);    
//console.log(`Averages of subarrays of size K: ${result}`);
 //const result1 = characterReplacement("AAAB", 0);    
//console.log(`Averages of subarrays of size K: ${result1}`);
// const result2 = fruitIntoBasket( [1,2,3,2,2]);    
// console.log(`Averages of subarrays of size K: ${result2}`);
// const result3 = fruitIntoBasket( [3,3,3,1,2,1,1,2,3,3,4]);    
// console.log(`Averages of subarrays of size K: ${result3}`);

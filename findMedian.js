
/**
 * initialize your data structure here.
 */
let numbers = Array();
var MedianFinder = function() {
    this.numbers =  numbers;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.numbers.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let median = 0;
    let n = this.numbers.length;
    if(n === 1) return this.numbers[0]
    if(n % 2 === 0) median = (this.numbers[n/2 - 1] + this.numbers[n/2]) / 2 
    else median = this.numbers[Math.floor(n/2)];
    return median;
};

/** 
 * Your MedianFinder object will be instantiated and called as such: */
 var obj = new MedianFinder()
 obj.addNum(6)
 var param_2 = obj.findMedian();
 obj.addNum(10)
 var param_2 = obj.findMedian();
 obj.addNum(2)
 var param_2 = obj.findMedian();
 console.log(param_2)
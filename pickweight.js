/**
 * @param {number[]} w
 */
 class Solution {
    constructor(w) {
        this.arr = [];
        let val = 0
        w.forEach((x, i) => {
            this.arr[i] = x+val;
            val = this.arr[i];
        });
        this.min = Math.ceil(this.arr[0]);
        this.max = Math.floor(this.arr[this.arr.length-1]);
    }


 getRandomNumber = () => {
     return Math.floor(Math.random() * this.max);//(this.max-this.min+1)) + this.min;
 }
 
 binarySeach = (l, r, randomNum) => {
     //console.log(randomNum);
     while(l < r) {
         const mid = l + Math.trunc((r-l)/2 );
         if(randomNum >= this.arr[mid]) {
            l = mid + 1;
             
         } else {
            r = mid;
         }
     }
     return l;
    /*let i = 0;
    for (; i < this.arr.length; ++i) {
        if (randomNum < this.arr[i])
            return i;
    }
     return i-1;
     */
 }
/**
 * @return {number}
 */
    pickIndex = function() {
        const randomNumber = this.getRandomNumber();
        return this.binarySeach(0, this.arr.length-1, randomNumber);
    }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
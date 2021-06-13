class Change {
    constructor() {
        this.memo = {};
    }
changePossibilities(amountLeft, denominations, currentIndex = 0) {
    const memoKey = [amountLeft, currentIndex].join(",");
    if(this.memo.hasOwnProperty(memoKey)) {
        return this.memo[memoKey];
    }
    // Calculate the number of ways to make change
    if(amountLeft == 0) 
      return 1;
    if (amountLeft < 0)
        return 0;
    if(denominations[currentIndex] == denominations.lenght) return 0;
    let num = 0;
    const currentCoin = denominations[currentIndex]
    while(amountLeft >= 0) {
        num += this.changePossibilities(amountLeft, denominations, currentIndex + 1);
        amountLeft = amountLeft - currentCoin;
    }
    this.memo[memoKey] = num; 
    return num;
  }
}
  // Tests
  
  let desc = 'sample input';
  let c = new Change();

//  let actual = c.changePossibilities(4, [1, 2,3]);
  actual = c.changePossibilities(100, [1, 5, 10, 25, 50]);

  console.log(actual)
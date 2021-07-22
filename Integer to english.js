/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {
    const one = (num) => {
        switch(num) {
          case 1: return "One";
          case 2: return "Two";
          case 3: return "Three";
          case 4: return "Four";
          case 5: return "Five";
          case 6: return "Six";
          case 7: return "Seven";
          case 8: return "Eight";
          case 9: return "Nine";
        }
        return "";
    };

    const twoLessThan20 = (num) => {
        switch(num) {
          case 10: return "Ten";
          case 11: return "Eleven";
          case 12: return "Twelve";
          case 13: return "Thirteen";
          case 14: return "Fourteen";
          case 15: return "Fifteen";
          case 16: return "Sixteen";
          case 17: return "Seventeen";
          case 18: return "Eighteen";
          case 19: return "Nineteen";
        }
        return "";
    };

    const ten =(num) => {
        switch(num) {
          case 2: return "Twenty";
          case 3: return "Thirty";
          case 4: return "Forty";
          case 5: return "Fifty";
          case 6: return "Sixty";
          case 7: return "Seventy";
          case 8: return "Eighty";
          case 9: return "Ninety";
        }
        return "";
    };

    const getHundreds = (num) => {
        const result = [];
        const hundredth = Math.trunc(num/100);
        if(hundredth) {
            result.push(one(hundredth));
            result.push('Hundred');
        }
        const tenth = num % 100;
        if(!tenth) {
            return result;
        }
        if(tenth < 10) {
            result.push(one(tenth));
            return result;
        }
        if(tenth < 20 ) {
            result.push(twoLessThan20(tenth));
            return result;
        }
        result.push(ten(Math.trunc(tenth/10)));
        const unit = tenth % 10;
        if(unit) {
            result.push(one(unit));
        }
        return result;
    };
    
    const numArray = [
        'Billion',
        'Million',
        'Thousand'
    ];
    const getString = (num) => {
        if(num === 0) {
            return ['Zero'];
        }
        let result = [];
        let divideBy = Math.pow(1000, numArray.length);
        numArray.forEach((thousand) => {
            let thousandth = Math.trunc(num / divideBy);
            if(thousandth) {
                result = result.concat(getHundreds(thousandth));
                result.push(thousand);
            }
            num = num % divideBy;
            divideBy = Math.trunc(divideBy / 1000);
        });
        result = result.concat(getHundreds(num));
        return result;
    };
    
    return getString(num).join(' ');
};
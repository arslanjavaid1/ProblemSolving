const getLowestPrices = (inputIntervals) => {

  // First Step would be sort the timeIntervals by Start Time
  inputIntervals.sort(function(a, b) {
    return a.startTime - b.startTime;
  });

  // add the first instance in result Set
  let result = [];
  result.push(inputIntervals[0]);

  for(let i = 1; i < inputIntervals.length; i++) {
    let previousResult = result[i - 1];
    let current = inputIntervals[i];

    // If the previous result is greater than the current price
    // update the end time in previous result
    if(previousResult.price > current.price) {
        previousResult.endTime = current.startTime;
        result.push(current);
    } else {

        // If the current price is greater than previous price 
        // We should only change values when current endTime is greater than previous endTime
        // Update current Start time to previous end time to cover the interval
        if(current.endTime > previousResult.endTime) {
            current.startTime = previousResult.endTime;
            result.push(current);
        }
    }
  }

  return result;
};

const testCases = [
    [
        {
            startTime: 0,
            endTime: 4,
            price: 5
          },
          {
            startTime: 2,
            endTime: 8,
            price: 3
          },
          {
            startTime: 7,
            endTime: 11,
            price: 10
          }
    ],
    [
        {
            startTime: 0,
            endTime: 3,
            price: 5
          },
          {
            startTime: 1,
            endTime: 2,
            price: 3
          },
          {
            startTime: 2,
            endTime: 3,
            price: 5
          }
    ],
    [
        {
            startTime: 0,
            endTime: 8,
            price: 5
          },
          {
            startTime: 2,
            endTime: 4,
            price: 3
          },
          {
            startTime: 7,
            endTime: 11,
            price: 10
          }
    ]

];

const resultSet = [
    [
        { startTime: 0, endTime: 2, price: 5 },
        { startTime: 2, endTime: 8, price: 3 },
        { startTime: 8, endTime: 11, price: 10 }
      ],
      [
        { startTime: 0, endTime: 1, price: 5 },
        { startTime: 1, endTime: 2, price: 3 },
        { startTime: 2, endTime: 3, price: 5 }
      ],
      [
        { startTime: 0, endTime: 2, price: 5 },
        { startTime: 2, endTime: 4, price: 3 },
        { startTime: 4, endTime: 11, price: 10 }
      ]
]

testCases.forEach((eachTestCase, index) => {
    (JSON.stringify(getLowestPrices(eachTestCase)) === JSON.stringify(resultSet[index])) ? console.log('Passed') : console.error('Failed');
    console.log(getLowestPrices(eachTestCase));
});

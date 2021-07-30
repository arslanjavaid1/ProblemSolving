/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

    let totalGas = (currGas = station = 0);
    for (let i = 0; i < gas.length; i++) {
        currGas += gas[i] - cost[i];
        totalGas += gas[i] - cost[i];
        if (currGas < 0) {
            currGas = 0;
            station = i + 1; // Last station not ample, try next
        }
    }
    return totalGas < 0 ? -1 : station;
};
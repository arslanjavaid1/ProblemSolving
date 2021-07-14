const oceanView = (buildings) => {
    if (buildings.length <= 2)
        return list1;
    let n = buildings.length;
    let leftStack = [0];
    let rightStack = [n - 1];
    for (let i = 0; i < n; i++) {
        let leftIndex = i;
        let rightIndex = n - 1 - i;
        let leftEnd = leftStack.length - 1;
        let rightEnd = rightStack.length - 1;
        if (leftIndex >= rightStack[rightEnd] || rightIndex <= leftStack[leftEnd])
            break;
        if (buildings[leftIndex] > leftStack[leftEnd]) {
            leftStack.push(leftIndex)
        }
        if (buildings[rightIndex] > buildings[rightEnd])
            rightStack.push(rightIndex)
    }
    return {leftStack, rightStack};
}

let list1 = [3, 4, 5, 1, 2, 9];
console.log(oceanView(list1));


const stackOfBoxes = (boxes) => {
    if (boxes.length === 0)
        return 0
    boxes.sort((a, b) => {
        return (a[0] - b[0]);
    });
    let height = [];
    for (let i = 0; i < boxes.length; i++) {
        height.push(boxes[i][2]);
    }
    
    let s = [];
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        for (let j = 0; j < i; j++) {
            if (canBeStacked(boxes[j], box))
                s.push(boxes[j][2]);
        }
        height[i] = box[2] + Math.max(s[height[i]] ||  0   , 0);
    }
    return Math.max(...height.values());
}

const canBeStacked = (top, bottom) => {
    return top[0] < bottom[0] && top[1] < bottom[1];
}
let arr = [[1,2,2], [1, 5, 4], [2, 3, 2], [2, 4, 1], [3, 6, 2], [4, 5, 3]];
console.log(stackOfBoxes(arr))
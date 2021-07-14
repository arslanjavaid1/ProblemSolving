// const oceanView = (list1) => {
//     if (list1.length <= 2)
//         return list1;
//     let result = [];
//     for (let i = 0; i < list1.length; i++) {
//         for (let j = i; j < list1.length; j++) {
//             if (list1[i] > list1[j] && j === list1.length - 1) {
//                 result.push(i);
//             } else if (list1[i] < list1[j]) break;
//         }
//     }
//     result.push(list1.length  - 1)
//     return result;

// }

// let list1 = [1, 3, 2, 4];
// console.log(oceanView(list1));


const oceanView = (list1) => {
    if (list1.length <= 2)
        return list1;
    let result = [list1.length - 1];
    let max = list1[list1.length - 1];
    for (let i = list1.length - 1 ; i >= 0; i--) {
        if ( list1[i] > max){
            max = list1[i];
            result.push(i);
        }
    }
    return result.reverse();

}

let list1 = [6, 2, 2, 3, 10];
console.log(oceanView(list1));


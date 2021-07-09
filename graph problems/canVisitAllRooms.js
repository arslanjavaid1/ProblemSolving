/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
let result;
var canVisitAllRooms = function (rooms) {
    result = Array();
    dfs(rooms);
    return result.length === rooms.length;
};
const dfs = (rooms, i = 0, count = 0, visited = [], path = []) => {
    path.push(i);
    visited[i] = true;

    for (let j = 0; j < rooms[i].length; j++) {
        if (visited[rooms[i][j]])
            continue;
        dfs(rooms, rooms[i][j], count, visited, path);
    }
    if (i === 0) {
        result.push(...path)
        return;
    }
}
console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))
console.log(canVisitAllRooms([[2], [], [1]]))
console.log(canVisitAllRooms([[1], [1, 1]]))
console.log(canVisitAllRooms([[2, 3], [], [2], [1, 3, 1]]))

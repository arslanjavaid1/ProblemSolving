const robotCleaner = (room) => {
    if(!room)
    return null;
    const visited = new Set();
    let directions = [[1,1], [1, -1], [-1, 1], [-1,-1]];
    backtrack(room, directions, visited, 0, 0, 0)
}

const backtrack = (room, directions, visited,x,y,arrow) => {
    let path = x + '-'+ y;
    if(visited.has(path)) return;
    visited.add(path);
    robot.clean();
    for(let i = 0; i < 4; i++) {
        let xn = x + directions[i][0];
        let xy = y + directions[i][1];
        backtrack(room,directions,visited,xn,yn, arrow);
        robot.turnLeft();
        robot.turnLeft();
        robot.move();
        robot.turnLeft();
        robot.turnLeft();
    }
    robot.turnLeft();
    arrow = (arrow + 1) %4
};




let room = [
[1,1,1,1,1,0,1,1],
[1,1,1,1,1,0,1,1],
[1,0,1,1,1,1,1,1],
[0,0,0,1,0,0,0,0],
[1,1,1,1,1,1,1,1]
];
let row = 1
let col = 3

console.log(robotCleaner(room))
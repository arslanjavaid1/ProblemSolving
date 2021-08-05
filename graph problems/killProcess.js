/*
582. Kill Process
Medium

You have n processes forming a rooted tree structure. You are given two integer arrays pid and ppid, where pid[i] is the ID of the ith process and ppid[i] is the ID of the ith process's parent process.

Each process has only one parent process but may have multiple children processes. Only one process has ppid[i] = 0, which means this process has no parent process (the root of the tree).

When a process is killed, all of its children processes will also be killed.

Given an integer kill representing the ID of a process you want to kill, return a list of the IDs of the processes that will be killed. You may return the answer in any order.

 
*/
var killProcess = function(pid, ppid, kill) {
    
    const adjList = new Map()
    
    for(let i = 0; i < pid.length; i++) {
        if(!ppid[i]) continue;
        if(!adjList.has(ppid[i])) adjList.set(ppid[i], []);
        adjList.get(ppid[i]).push(pid[i]);
    }
    
    function callDFS(node) {
        const res = [node];
        
        for(let next of (adjList.get(node) || [])) {
            res.push(...callDFS(next));
        }
        return res;
    }
    return callDFS(kill)
};
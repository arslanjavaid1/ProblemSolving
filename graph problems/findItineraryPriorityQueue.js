/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // https://leetcode.com/problems/reconstruct-itinerary/discuss/78768/Short-Ruby-Python-Java-C++/163964
    const map = new Map();
    
    for(let ticket of tickets) {
        if(!map.has(ticket[0])) {
            map.set(ticket[0], new priorityQueue());
        }
        map.get(ticket[0]).add(ticket[1]);
    }
    
    // console.log(map)
    
    const stack = ['JFK'], ans = [];
    
    while(stack.length > 0) {
        while(map.has(stack[stack.length-1]) && map.get(stack[stack.length-1]).size() > 0) {
            stack.push(map.get(stack[stack.length-1]).pop());
        }
        ans.push(stack.pop());
    }
    
    // console.log(ans);
    
    return ans.reverse();
};

/** PriorityQueue with O(lg(n)) operation cost, 
    https://www.geeksforgeeks.org/priority-queue-using-binary-heap/
**/
const priorityQueue = function() {
    // minHeap
    this.queue = [];
}

priorityQueue.prototype.add = function(v) {
    this.queue.push(v);
    this.shiftUp();
}

priorityQueue.prototype.pop = function() {   
    let min = this.queue[0];
    
    if(this.queue.length > 1) {
        this.queue[0] = this.queue.pop();
        this.shiftDown(0);
    } else {
        this.queue.pop();
    }    

    return min;
}

priorityQueue.prototype.shiftUp = function() {
    let i = this.queue.length - 1;
    
    while (i > 0 && this.queue[this.parent(i)] > this.queue[i]){
        let pIndex = this.parent(i);
        // swap with parent node
        [this.queue[pIndex], this.queue[i]] = [this.queue[i], this.queue[pIndex]];

        // Update i to parent of i
        i = pIndex;
    }
}

priorityQueue.prototype.shiftDown = function(i) {
    let left = this.leftChild(i), right = this.rightChild(i);
    let size = this.queue.length;
    let selectedIndex = i;
    
    if(left < size && this.queue[selectedIndex] > this.queue[left]) {
        selectedIndex = left;
    }
    
    if(right < size && this.queue[selectedIndex] > this.queue[right]) {
        selectedIndex = right;
    }
    
    if(selectedIndex != i) {
        // swap
        [this.queue[selectedIndex], this.queue[i]] = [this.queue[i], this.queue[selectedIndex]];
        this.shiftDown(selectedIndex);
    }
}

priorityQueue.prototype.parent = function(i) {
    return Math.floor((i-1)/2);
}

priorityQueue.prototype.leftChild = function(i) {
    return 2*i+1;
}

priorityQueue.prototype.rightChild = function(i) {
    return 2*i+2;
}

priorityQueue.prototype.size = function() {
    return this.queue.length;
}




/**
// PriorityQueue implementation,  O(n) add operation cost, O(1) pop operation cost

const priorityQueue = function() {
    // index 0 is max, index len-1 is min
    this.queue = [];
}

priorityQueue.prototype.add = function(v) {
    this.queue.push(v);
    for(let i = this.queue.length - 1; i >= 1; i--) {
        if(this.queue[i] > this.queue[i-1]) {
            [this.queue[i], this.queue[i-1]] = [this.queue[i-1], this.queue[i]];
        } else {
            break;
        }
    }
}

priorityQueue.prototype.size = function() {
    return this.queue.length;
}

priorityQueue.prototype.pop = function() {
    return this.queue.pop();
}

**/
/// minMeetingRooms
/// 253. Meeting Rooms II
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    /*const start = intervals.map((x) => x[0]);
    start.sort((a, b) => a-b);
    const end = intervals.map((x) => x[1]);
    end.sort((a, b) => a-b);
    let count = 0;
    let [sp, ep] = [0, 0];
    while(sp < start.length) {
        if(start[sp] >= end[ep]) {
            ep++;
            count--;
        }
        count++;
        sp++;
    }
    return count;
    */
  
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
};
class PQ {
  constructor() {
    this.values = [];
  }
  add(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent.priority >= current.priority) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
    
  remove() {
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length === 0) {
        return max;
    }
    this.values[0] = end;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < current.priority) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < current.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }

    return max;
  }
    
    print() {
        for(let v of this.values) {
            console.log(v);
        }
    }
    
    isEmpty() {
        return this.values.length === 0;
    }
    
    front() {
        return this.values[0];
    }
    
    size() {
        return this.values.length;
    }
}
  
    
    const minpq = new PQ();
    if(intervals.length === 0) {
        return 0;
    }
    intervals.sort((a, b) => (a[0] - b[0]));
    minpq.add(intervals[0], intervals[0][1]);
    
    //console.log(intervals);
    for(let i = 1; i < intervals.length; i++) {
        const first = minpq.front();
        if(intervals[i][0] >= first.priority) {
            minpq.remove();
            minpq.add(intervals[i], intervals[i][1]);
        } else {
            minpq.add(intervals[i], intervals[i][1]);
        }
        
    }
    //console.log(minpq);
    return minpq.size();
    
};

const minMeetingRooms_ = intervals => {
    const starts = intervals.map(interval=>interval[0]).sort((a, b)=>a-b)
    const ends = intervals.map(interval=>interval[1]).sort((a, b)=>a-b)
    let [rooms, j] = [0,0]
    for(let i=0; i < starts.length; i++) {
        starts[i] < ends[j] ? rooms++: j++;
    }
    return rooms;
}
let intervals = [[0,30],[5,10],[15,20]];
intervals = [[7,10],[2,4]]

console.log(minMeetingRooms_(intervals))
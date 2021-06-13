class MaxStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.items.length) {
            return null;
        }
        return this.items.pop();
    }
    peek() {
        if (!this.items.length) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    getMax() {
        return(Math.max(...this.items));
    }
}


// Tests

const s = new MaxStack();
s.push(5);

assertEquals(5, s.getMax(), 'check max after 1st push');

s.push(4);
s.push(7);
s.push(7);
s.push(8);

assertEquals(8, s.getMax(), 'check before 1st pop');
assertEquals(8, s.pop(), 'check pop #1');
assertEquals(7, s.getMax(), 'check max after 1st pop');
assertEquals(7, s.pop(), 'check pop #2');
assertEquals(7, s.getMax(), 'check max after 2nd pop');
assertEquals(7, s.pop(), 'check pop #3');
assertEquals(5, s.getMax(), 'check max after 3rd pop');
assertEquals(4, s.pop(), 'check pop #4');
assertEquals(5, s.getMax(), 'check max after 4th pop');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

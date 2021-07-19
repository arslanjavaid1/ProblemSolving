/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache.has(key)) return -1;

    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key))
        this.cache.delete(key);
    if (this.cache.size === this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(20)
obj.put('a', 'b');
obj.put('b', 'c');
obj.put('d', 'd');
obj.put('e', 'f');

var param_1 = obj.get('a');

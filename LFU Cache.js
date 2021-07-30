/**
 * @param {number} capacity
 */
 var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.keyToVal = new Map();
    this.freqToKey = new Map();
    this.keyToFreq = new Map();
    this.lowestFreq = 0;
    
    this.updateFrequency = (key) => {
      const prevFreq = this.keyToFreq.get(key);
      const newFreq = prevFreq + 1;
      this.keyToFreq.set(key, newFreq);
      this.freqToKey.get(prevFreq).delete(key);
      if(this.freqToKey.has(newFreq)) {
        this.freqToKey.get(newFreq).add(key);
      } else {
        this.freqToKey.set(newFreq, new Set([key]));
      }
      
      if (prevFreq === this.lowestFreq) {
        if (this.freqToKey.get(prevFreq).size === 0) {
          this.lowestFreq = newFreq;
        }
      }
    }
  };
  
  /** 
   * @param {number} key
   * @return {number}
   */
  LFUCache.prototype.get = function(key) {
    if (this.keyToVal.has(key)) {
      this.updateFrequency(key);
      return this.keyToVal.get(key);
    }
    return -1;
  };
  
  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  LFUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return;
    if (this.keyToVal.has(key)) {
        this.keyToVal.set(key, value)
        this.updateFrequency(key)
      } else {
      if (this.capacity === this.keyToVal.size) {
        const lowestFreqSet = this.freqToKey.get(this.lowestFreq);
        const lowestKey = lowestFreqSet.keys().next().value;
        this.keyToVal.delete(lowestKey);
        lowestFreqSet.delete(lowestKey);
        this.keyToFreq.delete(lowestKey);
      }
        
      const newFreq = 1;
      this.keyToVal.set(key, value);
      this.keyToFreq.set(key, newFreq);
      if (this.freqToKey.has(newFreq)) {
        this.freqToKey.get(newFreq).add(key);
      } else {
        this.freqToKey.set(newFreq, new Set([key]));
      }
      this.lowestFreq = newFreq;
    }
  };
  
  /** 
   * Your LFUCache object will be instantiated and called as such:
   * var obj = new LFUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */
class Max {
    constructor() {
        this.memo = {};
    }
    maxDuffelBagValue(cakeTypes, weightCapacity) {    
        if(cakeTypes.length == 0 || weightCapacity == 0)
            return 0;
      cakeTypes.sort((a,b) => {
            return b.value - a.value;
        });
        let sum = 0;
        let max = 0;
        let maxWeight = 0;
        cakeTypes.forEach(element => {
            const { weight, value } = element;
            maxWeight += weight;
            while(maxWeight <= weightCapacity) {
                
                if(maxWeight < weightCapacity) {
                    sum +=value;
                    maxWeight += weight;
                }
                if(maxWeight == weightCapacity) {
                    max = Math.max(max, maxWeight);
                    maxWeight = 0;
                    sum = 0;
                }

            };
        });
        return max;
    } 
  
}
const n = new Max();
let actual = n.maxDuffelBagValue([
    { weight: 4, value: 4 },
    { weight: 5, value: 5}], 9);
console.log(actual);
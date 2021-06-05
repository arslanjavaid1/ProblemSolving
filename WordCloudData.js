class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }
    isLetter(character) {
      return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-\''.indexOf(character) >= 0;
    }
    splitWords(inputString) {
      let res = [];
      let word = "";
      let chars = inputString.split('');
      for(let i = 0; i < chars.length;  i++) {
        if(this.isLetter(chars[i]) ) {
          word = word + chars[i];
        }
        if(!this.isLetter(chars[i]) || i === chars.length - 1) {
            if(word && word != "-")
                res.push(word);
          word = "";
        }
      }

      return res;
    }
    
    populateWordsToCounts(inputString) {
      // Count the frequency of each word
      const words = this.splitWords(inputString);
      words.forEach(element => {
          element = element.toLowerCase();
            if(this.wordsToCounts.has(element)){
                this.wordsToCounts.set(element, this.wordsToCounts.get(element) + 1);
            } else {
                this.wordsToCounts.set(element, 1);
            }
        });
    }
  
  }  
  
  
  
  let actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
  console.log(actual);
  
  
  
  
  
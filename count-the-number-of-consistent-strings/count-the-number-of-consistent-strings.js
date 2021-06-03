/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  // const letters = new Set(allowed);
    
    
  let total = 0;
  for (let i = 0 ; i < words.length;i++){
    let isConsisent = true;
    const word = words[i]
    for (let j = 0; j < word.length; j++){
    const letter = words[i][j]
        if (!allowed.includes(letter)){
            isConsisent = false;
            break;
        }    
    }
    if (isConsisent) {
        total++;
    }      
    
  }
  return total;
};
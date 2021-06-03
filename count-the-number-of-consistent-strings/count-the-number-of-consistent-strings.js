/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const letters = new Set(allowed);
  return words.reduce((total, word) => {
    if (word.split('').every(letter => letters.has(letter))) {
        total++;
    };
    return total;
  }, 0);
};
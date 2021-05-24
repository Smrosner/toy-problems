/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 
 I: array of lowecase words, chars - string letter bank
 O: number, sum of lengths of all good strings
 C: 1 <= words.length <= 1000, 1 <= words[i].length, chars.length <= 100
 E: 
 
 tc: 
 words = ["cat","bt","hat","tree"], chars = "atach"
 
 take a look at each letter in word bank and keep count of occurances
 look at each word list, //cat
 take current word add look over one letter at a time
 if current letter is present in word bank
 remove current letter from word bank
 if current letter isnt present in word bank stop looking at word and move on to next
 if every letter in current word is in word bank add length of word to sum result
 reset letter bank after searching current word
 
 words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 */
var countCharacters = function(words, chars) {
  const letterCounts = chars.split('').reduce((count, letter) => {
    count[letter] = (count[letter] || 0) + 1;
    return count;
  }, {});
  

  const canMakeWord = (word, letterCounts) => {
    const wordCounts = {};
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (!(letter in letterCounts)) return false;
      wordCounts[letter] = (wordCounts[letter] || 0) + 1;
      if (letterCounts[letter] < wordCounts[letter]) return false;
    }
    return true;
  };
  
  return words.reduce((total, word) => {
    if (canMakeWord(word, letterCounts)) {
      total += word.length;
    }
    return total;
  }, 0)
};
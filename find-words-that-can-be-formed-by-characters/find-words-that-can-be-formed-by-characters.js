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
 let sum = 0
 for (let j = 0; j < words.length; j++) {
     let bank = {}
     for (let i = 0; i < chars.length; i++) {
         if (bank[chars[i]] === undefined) {
             bank[chars[i]] = 1
         } else {
             bank[chars[i]]++
         }
     }
     
     let word = words[j]
     for (let k = 0; k < word.length; k++) {
         let ltr = word[k]
         if (bank[ltr]) {
             bank[ltr]--
             if (k === word.length - 1) {
                sum +=  word.length
             }
         } else {
             break
         }
     }
 }
 return sum
};
/**
 * @param {string[]} words
 * @return {number}

 I: array of english lowercase strings
 O: number of chained words
 C: at least one element in words aray <= 1000, each element will be at least one char <= 16 elms
 E: since there will always be at least one element in chain, the count will always start at one. if input is only one element return count of one

 Input: words = ["a","b","ba","bca","bda","bdca"]
 Output: 4

 Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
 Output: 5

 [ 'xb', 'xbc', 'cxbc', 'pcxbc', 'pcxbcf' ]

 sort words in order of smallest length to larger length
 look at each character of current string and compare if each character is in next string
 and is also one element longer in length

 possible approach:
 save each current character of current word to object key set to count of times the character occurs   in the string. If next word in length has the same characters with one additional character it is able to be added to the word chain, so we would add to result count.

 */
 var longestStrChain = function(words) {
  let count = 1
  if (words.length === 1) {
      return count
  }

  const sorted = words.sort((a,b) => b.length - a.length)

  for (let i = 0; i < sorted.length; i++) {
    let bank = {}
    let shortbank = {}
      for (let k = 0; k < sorted[i].length; k++) {
        if (bank[sorted[i][k]] === undefined) {
          bank[sorted[i][k]] = 1
        } else {
          bank[sorted[i][k]]++
        }
      }
      let shortened = sorted[i].slice(0,sorted[i].length - 1)
      for (let j = 0; j < shortened.length; j++) {
        if (shortbank[shortened[j]] === undefined) {
          shortbank[shortened[j]] = 1
        } else {
          shortbank[shortened[j]]++
        }
      }
  }
return count

};
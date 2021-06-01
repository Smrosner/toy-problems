/**
 * @param {string} s
 * @return {string}
 
 I: string with letters and a number between 1 and 9 in it
 O: string with words in numaric order with number removed
 C: s is at least 2 chars and up to 200 chars, s will have letters and digit 1 to 9, words are separated by a single space
 E: 
 
 TC:
 "is2 sentence4 This1 a3"
 separate each word by space [is2, sentence4, This1, a3]
 look through each word
 remove last number and add current word to hold array, set to index to current number 
 when sentance array is at then end join soretd array with a space and return it
 */
var sortSentence = function(s) {
    const split = s.split(' ')
    let sort = []
    for (let i = 0; i < split.length; i++) {
            let number = split[i].slice(-1)
            let word = split[i].slice(0, -1)
            sort[number - 1] = word
    }
    return sort.join(" ")
};
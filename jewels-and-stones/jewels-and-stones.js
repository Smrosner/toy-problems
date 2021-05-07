/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 I: string of letters, string of letters
 O: number
 C: 1 <= jewels.length, stones.length <= 50, jewels and stones consist of only English letters., All the characters of jewels are unique.
 E:
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    for (let i = 0; i < jewels.length; i++) { // "aA"
        for (let j = 0; j < stones.length; j++) { // "aAAbbbb"
            if (jewels[i] === stones[j]) {
                count++
            }            
        }
    }
    return count
};
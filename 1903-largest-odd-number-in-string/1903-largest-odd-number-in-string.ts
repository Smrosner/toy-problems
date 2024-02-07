/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let res = ""

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 1) {
            let curOdd = num.slice(0, i+1)
            if (res === "") {
                res = curOdd
                continue
            }
            if (res < curOdd) {
              res = curOdd
            }
        }
    }
    return res
};
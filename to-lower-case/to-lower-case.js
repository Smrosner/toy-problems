/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        res += s[i].toLowerCase()
    }
    return res;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sStr = "";
    let tStr = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "#") {
            sStr += s[i];
        } else {
            sStr = sStr.slice(0,-1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (t[j] !== "#") {
            tStr += t[j];
        } else {
            tStr = tStr.slice(0,-1);
        }
    }

    return sStr === tStr;
};
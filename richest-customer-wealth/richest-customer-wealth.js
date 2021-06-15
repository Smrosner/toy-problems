/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        let cur = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            cur += accounts[i][j]
        }
        if (cur >= richest) {
            richest = cur
        }
    }
    return richest
};
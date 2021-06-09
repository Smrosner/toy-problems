/**
 * @param {string} instructions
 * @return {boolean}
 */

const dirs =[[1,0],[0,1],[-1,0],[0,-1]]

var isRobotBounded = function(instructions) {
    let curPos = [0,0]
    let curDir = 0
    
    for (let letter of instructions) {
        if (letter === 'G') {
            curPos[0] += dirs[curDir][0]
            curPos[1] += dirs[curDir][1]
        }
        
        if (letter === 'L') {
            curDir--
        }
        
        if (letter === 'R') {
            curDir++
        }
        
        if (curDir < 0) {
            curDir = 4 + curDir
        }
        
        curDir %= 4
    }
    
    if (curDir) {
        return true
    }
    
    if (!curPos[1] && !curPos[0]) {
        return true
    }
    
    return false
};
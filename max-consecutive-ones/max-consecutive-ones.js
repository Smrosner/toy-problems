/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   if (nums.length === 1) {
        if (nums[0] === 1) {
            return 1
        } else {
            return 0
        }
    }

    let count = 0 // 3
    let result = 0 // 2
    
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === 1) {
           count += 1
       } else {
           result = Math.max(result,count)
           count = 0
       }
    }

    return  Math.max(result,count)
};
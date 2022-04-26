/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 I: array of nums, target int 
 O: indices of two numbers, that add up to target
 C: only 1 valid answer, at least 2 length
 E: if length of 2 return array of [0,1]
 */
var twoSum = function(nums, target) {
    if (nums.length === 2) {
        return [0,1]
    }    
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i!==j && (nums[i] + nums[j] === target)) {
                return [i,j]
            }
        }
    }

};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 i- nums = array of numbers, target, number
 o- an array of two numbers that add up to target number in any order
 c- You may assume that each input would have exactly one solution, and you may not use the same element twice.
 e- 
 
 nums= [3,2,4], target 6
 look at each number moving from left to right to see if any number adds up target, if not by end move to next in line and search again.
 when two numbers do add up to target, add their index to array and return  
 */
var twoSum = function(nums, target) {

    if (nums.length === 2) {
        return [0,1]
    }

    for (i = 0; i < nums.length; i++) {
        for (j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                if (i !== j) {
                    return [i,j]
                }
                
            } 
        }
    }

};
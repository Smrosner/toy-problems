/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1; 
    
    while (left <= right) {
         let middle = left + Math.floor((right - left) / 2)
         let midNum = nums[middle]
         if (midNum === target) {
             return middle
         } else if (midNum < target) {
            left = middle + 1
         } else if (midNum > target) {
            right = middle - 1
         }
    }
    
    return -1
};


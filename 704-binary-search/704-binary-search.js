/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 [-1,0,3,5,9,12] = 6 length
 
 left 0 aka -1 , right 5 aka 12
 middle = 5 - 0 / 2 floored = 2
 nums[2] = 3 3 is less than 9 target
 left = middle + 1 aka 2 + 1 = 3

 left 3 aka 5 , right 5 aka 12
 middle = 5 - 3 / 2 = 1

 nums[1] = 9 
 9 is target return middle or 1
 
 
 
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


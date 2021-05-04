/*
Running Sum of 1d Array
https://leetcode.com/explore/featured/card/may-leetcoding-challenge-2021/598/week-1-may-1st-may-7th/3730/

* @param {number[]} nums
 * @return {number[]}
 I: array of numbers
 O: array of numbers
 C: 1 <= nums.length <= 1000, -10^6 <= nums[i] <= 10^6
 E:

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/

var runningSum = function(nums) {
  if (nums.length === 1) {
      return nums
  }
  for (let i = 0; i < nums.length; i++) {
   if (i > 0) {
       nums[i] = nums[i] + nums[i-1]
   }
  }
  return nums
};

console.log(runningSum([1,2,3,4])) // [1,3,6,10]
console.log(runningSum([1,1,1,1,1])) // [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])) // [3,4,6,16,17]
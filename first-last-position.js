/*
Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

I: sorted array
O: array of first and last index coords
C: 0 <= nums.length <= 105 | -109 <= nums[i] <= 109 | nums is a non-decreasing array | -109 <= target <= 109
E:
*/

var searchRange = function(nums, target) {
  if (nums.length === 0) {
    return [-1,-1]
  }

  if (!nums.includes(target)) {
    return [-1,-1]
  }

  let cords = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (cords.start === undefined) {
        cords.start = i
      } else {
        cords.end = i
      }
    }
  }

  if(!cords.end) {
    return [cords.start, cords.start]
  } else {
    return [cords.start, cords.end]
  }
};

// var arr = [5,7,7,8,8,10]
// var targ = 8

// var arr = []
// var targ = 0

// var arr = [3,3,3]
// var targ = 3

// var arr = [1,2,3,3,3,3,4,5,9]
// var targ = 3

var arr = [2,2]
var targ = 2

console.log(searchRange(arr, targ))
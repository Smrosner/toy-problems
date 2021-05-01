/*
1470. Shuffle the Array
https://leetcode.com/problems/shuffle-the-array/

 I: nums - array of unsorted numbers, n = number, index where array
 O: array of shuffled x and y elements
 C: 1 <= n <= 500 nums.length == 2n 1 <= nums[i] <= 10^3
 E:

TC:
Input: nums = [1,2,3,4,4,3,2,1], n = 4
x1=1, y1=4, x2=2, y2=3, x3=3, y3=2, x4=4, y4=1
Output: [1,4,2,3,3,2,4,1]

*/

var shuffle = function(nums, n) {
  // create result array
  let result = []
  // split number array at n index, x array and y array
  const x = nums.slice(0,n)
  const y = nums.slice(n)
  // look at each element of x and y array
  for (let i = 0; i < x.length; i++) {
  // adding each element of each array alternating between x and y array to result array
      result.push(x[i], y[i])
  }
  return result
};

//better solution
// const shuffle = (arr, n) => {
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(arr[i]);
//     result.push(arr[i + n]);
//   }
//   return result;
// };


console.log(shuffle([2,5,1,3,4,7], 3))

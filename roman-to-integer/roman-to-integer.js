/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // create sum 
  var sum = 0;

  // loop over string
  for (var i = 0; i < s.length; i++) {
    // if current string is certain letter
    var letter = s[i];
    var letterAfter = s[i+1]
      // add corrisponding number to sum
      //MCMXCIX
      // 1000, 
      if (letter === 'M') {
        sum += 1000
      // 900, 400, 100
      } else if (letter === 'C') {
        if (letterAfter === 'M' || letterAfter === 'D') {
          sum += (-100); // (-100) + 1000;
        } else {
          sum += 100;
        }
      // 500
      } else if (letter === 'D') {
        sum += 500
      // 50
      } else if (letter === 'L') {
        sum += 50
      // 90, 40, 10
      } else if (letter === 'X') {
        if (letterAfter === 'C' || letterAfter === 'L') {
          sum += (-10); // (-10) + 50;
        } else {
        sum += 10
        }
      // 5
      } else if (letter === 'V') {
        sum += 5;
      // 9, 4, 1
      } else if (letter === 'I') {
        if (letterAfter === 'X' || letterAfter === 'V') {
          sum += (-1);
        } else {
        sum += 1
        }
      }
  }

  // return sum
  return sum;
};
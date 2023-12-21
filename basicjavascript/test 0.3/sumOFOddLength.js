// II-Given an array of strings print the sum of lengths if the characters in the string are odd (Use HOF)
// Sample Input - ["A", "Good", "Problem"] 
// Sample Output - 8

// Hint:lengths of ["A", "Good", "Problem"] are 1,4,7 => sum of odd length 1+7=>8 

var arr = ["A", "Good", "Problem"];

function sumOddLength(total, currentString) {
  if (currentString.length % 2 !== 0) {
    return total + currentString.length;
  }
  return total;
}

var res = arr.reduce(sumOddLength, 0);
console.log(res);


// III-Given an array of strings print the length of each string
// Use Higher order Function

// example  [apple, windows, ubuntu]
// output [5,7,6]

var arr = ["apple", "windows", "ubuntu"]

function getStringLengths(arr) {
  return arr.map(function (str) {
    return str.length;
  });
}

var result = getStringLengths(arr);
console.log(result);

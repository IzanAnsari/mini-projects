// IV-Given an array of string generate an array with their first characters

// Sample Input - [Masai, School]

// Sample Output - [M, S]

var arr = ["Masai", "School"];

function getFirstCharacters(arr) {
  return arr.map(function (str) {
    return str.charAt(0);
  });
}

var result = getFirstCharacters(arr);
console.log(result);

// I-Given an array of numbers generate an array containing the square value of the numbers
// Use HOF
// Sample Input [1, 2] Sample Output [1, 4]


var arr=[1,2]
function squareOfArray(element){
    return element*element
  }
  var res = arr.map(squareOfArray)
  console.log(res)
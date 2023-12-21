// VII-Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 

// Hint 3 and 6 are divisible by 3 = answer will be 3  3 + 6 3 = 27+ 216 = 243

// var arr = [1, 2, 3, 4, 5, 6];

function sumCubesIfDivisibleBy3(total, currentNumber) {
  if (currentNumber % 3 === 0) {
    return total + Math.pow(currentNumber, 3);
  }
  return total;
}

var res = arr.reduce(sumCubesIfDivisibleBy3, 0);
console.log(res);

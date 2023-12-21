// IX- You are given array of Number, add all the numbers which are prime.
// input:[2,3,5,6,78,9,11,12,1,5,16,17,16,37,79,69,137]
// output => 297

// Hint: 2, 3,5,11, 1,5, 17, 37, 79, 137 the are the prime Numbers in the given array and
//  there sum would be 2+3+5+11+1+5+17+37+79+137 => 297

var arr=[2,3,5,6,78,9,11,12,1,5,16,17,16,37,79,69,137]

function isPrime(num){
    count=0;
    for(i=0;i<=num;i++){
      if(num % i === 0){
        count++
      }
    }
    // if(count === 2){
    //   // console.log(num)
    //   console.log("prime")
    // }else{
    //   console.log("not prime")
    // }
    // count === 2
      // console.log(count===2)
    return count === 2  
  }
  // console.log(isPrime(3))
  // console.log(isPrime(6))
  
  function sumOfPrime(arr){
    sum=0;
    for(var i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            sum+=arr[i]
        }
        // console.log(arr[i])
    }
    console.log(sum)
  }
  sumOfPrime(arr)
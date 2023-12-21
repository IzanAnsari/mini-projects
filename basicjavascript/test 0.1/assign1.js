
// *********** Relational Operator ********************

// Question 01
// I-You are given a number stored in the variable N perform the below operation to the N and Print the result
//   1.multiply the value by 3
//   2.add 4 after It.
//   3.Subsract the 10 from  it


function opOnNumber(N){
    //console.log(N)
    N = N * 3
  
    N = N +4
  
    N = N - 10
    console.log('A1=sum is',N)
    }
  
  opOnNumber(10)
  opOnNumber(23)
  
  // Question 02:
  // II-You are given an interger N print its square Value
  
  function squareIt(n){
         sqrt = n*n
    console.log('A2=square root is',sqrt)
    }
  
  squareIt(10)
  squareIt(23)
  
  // Question 03:
  // You are given 5 variables stored in the variables with the name "one", "two", "three", "four", "five"
  
  // 1-all the values are doubled that is multiply by 2
  
  // 2-find the sum of values stored in "one", "two", "three", "four", "five" after the above operation
  // Print the sum.
  function doubleAll(one,two,three,four,five){
              doubleAll=(one*2)+(two*2)+(three*2)+(four*2)+(five*2)
    console.log('A3=the double of number and addition of all no is',doubleAll)
  
  }
  doubleAll(4,5,7,8,9)
  // doubleAll(4,7,6,8,3)
  
  // Question no 04:
  // Double Two Triple One  
  // you are given fourn numbers stored in the variable with the following names "one", "two", "three", "four"
  // perform the following operations
  
  // 1-the value stored in one and two is doubled i.e if it was initially 2 it becomes 4
  // 2-the value stored in three is multiply by 3 i.e if it was initially 9 it becomes 27
  // 4-the value stored in four is incresed by 6 i.e if it was initially 11 it becomes 17
  // find the sum of "one", "two", "three", "four" after all the opoerations performed above
  
  function Double(one,two,three,four){
       Double=(one*2)+(two*2)+(three*3)+(four+6)
    console.log('A4=the sum of all number is',Double)
  
  }
  Double(2,4,6,8)
  // Double(3,5,8,5)
  
  // Question no:05
  //  You are given seven number A B C D E F G. find out the Product of (A+B+C) And (D+E+F+G)
  // (A+B+C) * (D+E+F+G)
  
    function sevenNumber(A, B, C, D, E, F, G) {
         // Write code here
      let m = (A+B+C) * (D+E+F+G)
      console.log('A5=the product of (A+B+C) And (D+E+F+G)',m)
      
  
    }
  
  sevenNumber(1, 2, 3, 4, 5, 6, 7) //  132
  sevenNumber(1 ,1 ,1 ,1 ,1 ,1 ,1)  // 12
  
  
  // Hint: Product of Means multiplication of i.e product of 4 and 5 is 2 * 5
  
  // Question 06:
  // given a value of X find the final value of X if it's mulplied by 7 twice.
  // e.g if x=3 the final value will be 147
  function findX(x) {
      // Write code here  
    let n = x*7*7
    console.log('A6=the final value of x is',n)
  }
  
  findX(7)
  findX(9)
  
  // Question no:07
  // Infinity Stones
  //   • You are given five numbers, stored in variables with the following names
  //   one, two, three, four, five, six
  //   The value stored in the variable two, five, six has been doubled, such that if initially the value was 3, it has become 6
  //   The value stored in the variable three, four has been increased  three times, such that if initially it was 3, it has become 9
  //   The value stored in the variable one has not been changed.
  //   Find the sum of the updated values stored in one, two, three, four, five, six
  
    function infinityStones(one, two, three, four, five, six) {
        //Write code here
      infiStones=(one*1)+(two*2)+(three*3)+(four*3)+(five*2)+(six*2)
      console.log('A7=the sum of all number is',infiStones)
  
  
    }
  infinityStones(3,4,6,8,2,9)
  infinityStones(8,9,3,5,6,4)
  
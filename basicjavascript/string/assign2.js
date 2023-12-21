//************** Operator ************************

// I- COMPARE TWO NUMBERS:
// You are given two Numbers stored in a variable num1 and num2
// print the result of the following operations

// 1.num1 > num2 => print true if num1 is greater else print false
// 2.num1 < num2 => print true if num1 is smaller else print false
// 3.num1 == num2 => print true if num1 is equal to num2 else print false

function compareTwoNumbers(num1,num2){
  
    console.log('A1=',num1>num2)
    console.log('A1=',num1<num2)
    console.log('A1=',num1==num2)
    
  }
  
  // e.g
  compareTwoNumbers(4,5)
  // output: false
  //   true
  //   false
  
  // comapreTowNumbers(9,7)
  // output: true
  //   false
  //   false
  
  // II -UPDATE And COMPARE:
  //   You are given two Variables With the name num1,num2
  // print the Output of The following Operation
  //  num1 > num2, this prints true if num1 is greater than num2 else it prints false
  
  // after this operation is perfrormed another number stored in the variable with the name num3 is added to num1, Now print the result of the following operation
  
  //  num1 > num2, this prints true if num1 is greater than num2 else it prints false
  
  function updateAndCompare(num1,num2,num3){
    
    console.log('A2=',num1>num2)
    num1=num1+num3
    console.log('A2=',num1>num2)
  
  }
  updateAndCompare(4,8,5) 
  // output: false
  //   true
  
  // solution: num1 > num2 i,e 4 > 8 i.e false, 
  // after that num3 is added to num1, now num1 becomes 4 + 5 i.e 9, now
  // num1 > num2 i.e 9 > 8 which is true
  
  // III-sum and compare:
  //   You are give five numbers stroed in variables a,b,c,d,e you have to declare another variable sum1, such that sum1 = a + b + c, also one more variable sum2, such that sum2 = d+e
  // finally you have to print the output of following Operation
  // sum1 > sum2 (this prints True if sum1 is greater than sum2, else prints false)
  
  function sumAndCompare(a, b, c, d, e) {
    var sum1 = a + b + c;
    var sum2 = d + e;
    var result = sum1 > sum2;
    console.log("A3=sum1 would be " + sum1);
    console.log("A3=sum2 would be " + sum2);
    console.log("A3=the result of sum1 > sum2 would be " + result);
    return result;
  }
  
  sumAndCompare(6, 5, 4, 3, 2);
  
  // output: sum1 would be 6+4+5 = 15
  //   sum2 would be 3+2 = 5
  // the resule of sum1 > sum2 would be true
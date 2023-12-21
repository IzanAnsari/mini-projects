// II-Even again
// Description:
// You are given two Numbers stored in the variale with the following names
// max,min

// you have to find the sum of all even numbers that fall between them (including both)

// for e.g min = 14 and max = 19

// then sum of even numbers = 14 + 16 + 18 => 48

// Note: the value stored in max will always be greater than min

function evenCollection(min, max) {
    //write code here
    let sum =0;
    for (i = min; i <= max; i++) {
      if(i%2==0){
        sum=sum+i
        // console.log(sum)
    }
    }

    console.log(sum)
    

  }
  evenCollection(10,17) //   52
  // //hint : even numbers between 10 to 17 are 10 + 12 + 14 + 16 so result will be 52
  
  // evenCollection(3,10) // 28
  // //hint : even numbers between 3 and 10 are 4+6+8+10 => 28
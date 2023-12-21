// IV- Map Symbols

// Description

// = You are given a number stored in a variable with the name
// = You have to map the following symbols starting from the value N

// « The mapping is such that the difference between the values of two characters, is 2

// !,@,#,$,%,^,&,*

// « For example, consider the value stored in N = 10 , then the required output will be

// !-10
// @-12
// #-14
// $-16
// %-18
// ^-20
// &-22
// *-24



// Input

// « The first and the only line of the input contains the value stored in

// Output

// « Print the mapping for the symbols starting from nu , as shown in the problem statement

// Sample Input
// n = 20
// Sample Output
// !-10
// @-12
// #-14
// $-16
// %-18
// ^-20
// &-22
// *-24

function mapSymbols(N) {
    var symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
  
    for (let i = 0; i < symbols.length; i++) {
      var mappedValue = N + i * 2;
      console.log(`${symbols[i]}-${mappedValue}`);
    }
  }
  
  // Sample Input
  var N = 10;
  
  // Output
  mapSymbols(N);
  
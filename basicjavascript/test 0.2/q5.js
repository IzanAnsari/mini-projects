// V-Traingle Pattern:
// => You are given a variable with the name N,
// => you halve to print the pattern as given below, according to the value of N

// e.g N = 6
// output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

// e.g N = 4
// output:
// 1
// 2 2
// 3 3 3
// 4 4 4 4

function rightAngleTriangle(N) {
    // Write code here
   
        for (var k=1; k<=N; k++){
          var res = "";
        for (var i=1; i<=k; i++){
          res = res + k + " ";
        }
          console.log(res)
      }
      
}
rightAngleTriangle(5)

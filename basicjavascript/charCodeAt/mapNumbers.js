// III -Map Numbers

// Description

// « You are given a number stored in a variable with the name n
// « You are given another number stored in a variable with the name k
// « You have to map all the numbers in the range of [1, n] , including the values stored in i, such that the mapping begins from k

// « For example, consider the value stored in n = 5, and k = 10 , then the required output will be

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

// Input

// » The first line of the input contains the value stored in n

// = The next line of the input contains the value stored in k

// Output

// « Print the output as shown in the problem statement

// Sample Input 1 
// n = 5 
// k =10
// Sample Output 1
// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

function mapNumbers(n,k){
    // res=''
 

    for(i=0;i<n;i++){
        num=k+i
    //   res+=num
    console.log(num)
    // return num
    }
 }

 n = 5 
 k = 10
 var output=mapNumbers(n,k)
//  console.log(output)


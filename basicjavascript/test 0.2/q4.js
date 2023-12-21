// IV-Capital Letters in String XIII

// Description

// « You are given a string stored in a variable with the name str, containing a mix of upper case and lower case English characters

// The length of the string is stored in a variable with the name n

// You have to solve the equation 13x , where x is the number of capital upper case English characters in the string

// For example, consider the value stored in n = 5, and str = raHuL

// The number of upper case characters in the string is 2 i.e H and L

// Therefore, the value of the equation 13x, becomes 13*2 = 26 , which is the required answer

// Input
// You are given two variable N, and Str
// write a function with these two parameters and solve.

function getUpperCase(str, N) {
    let count = 0;
    for (i = 0; i < N; i++) {
        if (str[i] === str[i].toUpperCase()) {
            count++
            final = count * 13
        }
    }
    console.log(final)
    // return 13*count;
}

getUpperCase("raHuL", 5)// 26
// //The number of upper case characters in the string is 2 i.e H and L. Therefore, the value of the equation 13x, becomes 13*2 = 26 , which is the required answer
// Output

// // search for .toUpperCase() and .toLowerCase() method on internet.
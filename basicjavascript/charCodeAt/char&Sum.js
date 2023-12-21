// II- Map Characters & Sum

// Description

// « You are given a number stored in a variable with the name n
// « You are also, given a string, whose length is stored in a variable with the name k , and the string is stored in a variable with the name str
// « You have to map all lower case English characters, starting from the value stored in n

// « For example, if the value stored in n = 30 , then the mapping of the characters will be as follows

// a-30
// b-31
// c-32
// d-33
// e-34
// f-35
// .
// .
// .
// x-53
// y-54
// z-55

// « Finally, you have to print the sum of all the characters, present in the string str , according to the values mapped above

// « For example, if the value stored in str - "abc" , then the required output will be

// 30 + 31 + 32 = 93, which is the required output

// Input

// » The first line of the input contains the value stored in n
// = The second line of the input contains the value stored in k

// » The last line of the input contains the value stored in the str

// Output

// « Print the sum of characters, according to the values mapped, as shown in the problem statement

// Sample Input 1
//  n = 30
// k = 3 (legnth of the str)
// str = "abc"

// Sample Output 1
// 93

// Hint: if you will infront of a is 30, b is 31, and c is 93 hence the result is 30+31+32 => 93
// function name(n,k,str){

// }

function mapCharactersAndSum(n, k, str) {
    let result = 0;

    for (let i = 0; i < k; i++) {
        // Map each character to its corresponding value
        let charValue = n + i;
        
        // Add the mapped value to the result
        result += charValue;
    }

    return result;
}

// Example usage:
const n = 30;
const k = 3;
const str = "abc";

const output = mapCharactersAndSum(n, k, str);
console.log(output);

// V- You are given a string, you have to solve and print the final value of 13 * X, where X is number of capital letters in the given String

// input-i  : muKesH
// output : 26 (Hint: number of capital Letters 2, 13 * 2 => 26)

// input-ii : charCodeAtMyNumber
// output: 52

// str=["muKesH"]
function productOfCap(str){
    count=0;
    for(i=0;i<str.length;i++){
        // if(str[i]>='A' && str[i]<'Z'){
            if(str[i].match(/[A-Z]/)){
            count++
        }
    }
    // console.log(count)
     result = 11 * count;
    // console.log(result);
    return result;

}
output1=productOfCap("muKesH")
console.log(output1)
output2=productOfCap("charCodeAtMyNumber")
console.log(output2)


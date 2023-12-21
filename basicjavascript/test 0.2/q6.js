// VI-check Pallindrome.
// Description:
// => you are given a string with the variable name, str.
// => Print "Yes" if the string is palindrome, else print "No"
// for e.g => consider the str = "naman", if we reverse the string, the reversed string will be same as the original string, hence this is Palindrome srtring.therefore output will be "Yes"

// NOTE: A palindrome is a string which is the same read forwards or backwards.

// e.g : sas => Yes
// e.g: damad => Yes
// e.g: enteretne => Yes

function checkPalindrom(str){
//write Your code here
var res="";
for(var i=str.length-1;i>=0;i--){
   res=res+str[i]
}
// console.log(res)
if(str===res){
   // console.log('palidrom')\
   return "Yes"
}else{
   // console.log('not palidrom')
   return "No"
}
}
// checkPalindrom('sas')
console.log(checkPalindrom('sas'))
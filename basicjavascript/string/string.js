// V-print true if vowel present in the string else print false.
function isVowel(str,n){
    // let flag==str.length;
    for(i=0;i<n;i++){
      // console.log(str[i])
      if(str[i]=='a' || str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u'){
        console.log(true)
         // console.log(str[i])
      }else{
        console.log(false)
      }
      
    }
    
  }
  isVowel("shariq",6) // true because vowel is present i.e a and i are vowel
  
  // isVowel("crwtq",5)// false cause no vowel present.
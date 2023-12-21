// V- Given an array of string generate an array whose first or last character is a
// Sample Input - [assignment, problem, media, upload]
// Sample Output - [assignment, media]

var arr = ["assignment", "problem", "media", "upload"];

    function filterByFirstOrLastA(str) {
      // return str[0] === 'a' || str[str.length - 1] === 'a';
         return str.startsWith('a') || str.endsWith('a');

    }
    
    var result = arr.filter(filterByFirstOrLastA);
    
    console.log(result);
    
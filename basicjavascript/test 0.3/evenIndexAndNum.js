// VI-Given an array of numbers, return the elements that have even index (starting the index from 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]

var arr = [2, 4, 5, 3, 6, 8] 

function evenElement(index,evenElement){
    return index % 2 == 0 && evenElement % 2 === 0
}

var res = arr.filter(evenElement)
console.log(res)
// II-Given an array of numbers extract the numbers which are odd, Use HOF
// Sample Input - [1,2,3] Sample Output - [1,3]
// Sample Input - [1,2,3,4,5,6,9,8,74,12,13,54,6] Sample Output - [1,3,5,9,13]

var arr=[1,2,3,4,5,6,9,8,74,12,13,54,6]
function oddNumbers(arr){
    res=''
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            res+=arr[i]+' '
            // return arr[i]
        }
    }
    console.log(res)
}
// }
// var res = arr.map(oddNumbers)
// console.log(res)


oddNumbers(arr)
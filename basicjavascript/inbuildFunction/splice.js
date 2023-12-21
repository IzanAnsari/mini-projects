// 6- make a function which acts like splice

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);

// var arr = ["one","two","three","four","five"]
// function splice(arr,start,items){
//   var res = []
//   for(var y = 0 ; y < arr.length ; y++){
//    if(start > arr.length == 0){
//     res.push(arr[y])
//    }
//   }
//   return res
// } 

// var res = splice(arr,5,"")
// console.log(res)
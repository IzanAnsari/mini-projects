// 5- make a function which acts like .reverse

// const array1 = ['one', 'two', 'three'];
// const reversed = array1.reverse();
// console.log('reversed:', reversed);

var arr = ["red","yellow","blue","green","white","black","purple","ligth-blue"," sky-blue"]

function reverse(arr){
  var res = []
  for(var i = arr.length - 1 ; i >= 0 ; i--){
    res.push(arr[i])
  }
  return res
}
var res = reverse(arr)
console.log(res)
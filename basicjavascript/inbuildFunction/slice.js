//inbuild function

var arr=[1,2,4,4,5,6,6,7,8]
// var res = arr.slice(2,6)
// console.log(res)

// build function

function slice(arr,start,end){
    var res=[]
    if(end === undefined){
        end = arr.length
      }
    for(i=start;i<end;i++){
        res.push=(arr[i])
    }
    console.log(arr[i])
}
var res=slice(arr,2,5)

// function slice(arr,start,end){
//     var res = []
//     if(end === undefined){
//       end = arr.length
//     }
//     for(var i = start;i <end;i++ ){
//       res.push(arr[i])
//     }
//     // console.log(res)
//     return res
    
//   }
//   var res = slice(arr,2) // ['orange',"banana",'grapes','water melon]
//   console.log(res)
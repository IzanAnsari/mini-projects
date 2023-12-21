// inbuild function


// var arr = [4,5,6,8]

// arr.push(2,5,3,3,1,1,2)
//  var changed = arr.join('hello')
//  var changed = arr.join()
//  console.log(changed)

// build function

 function join(arr,char){
    if (char === undefined){
        char = ','
    }
    var res=''
  for(i=0;i<arr.length;i++){
    if(i === arr.length){
        res += arr[i]
    }else{
        res += arr[i] + char
    }
}
// console.log(res)
return res;
}
// var myjoin = join(myArr," hello")
// var myArr=[2,3,4,2,3,4,1]
var myArr = [10,9,8,7,6,5,4] //10:9:8:7:6:5:4:3:2:1
var jn = myArr.join(" : ")
console.log(jn)
// var myjoin = join(myArr," hello")
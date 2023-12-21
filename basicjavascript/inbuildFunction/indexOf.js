// 3- make a function which acts like .indexOf


// inbuilt function
// var res= arr.indexOf('ahmed')
// console.log(res)

var arr = [1, 2, 3, 4, 5, 5, 6, 7, 7];

function indexOf(element, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; 
        }
    }
    return -1;
}


var index = indexOf(7, arr);
console.log(index)
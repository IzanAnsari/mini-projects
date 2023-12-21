// III-Count Digits 
// description: 
// => You are given an array ,stored in a variable with the name arr

// => the length of the array is stored in a variable n

// => You have to find the count of 0's, 1's, and 2's.

// for example, consider the array arr= [0,1,0,2,1,2,0,1,2,0]

// then required output will be 4 3 3. Note that the output will be in given format only.

function countZerosOnesTwos(arr, N) {
    //write code here
    let countzeros = 0;
    let countones = 0;
    let counttwos = 0;
    for (i = 0; i < N; i++) {
        if (arr[i] == 0) {
            // countzeros=countzeros+arr[i]
            countzeros++

        }else if(arr[i]==1){
            countones++
        }else if(arr[i]==2){
            counttwos++
        }
        
    }
    console.log(countzeros,countones,counttwos )

}

countZerosOnesTwos([0, 1, 0, 2, 1, 2, 0, 1, 2, 0], 10)// 4 3 3
// //hint: number of zeros are 4, number of 1's are 3 and Number of 2's are 3 so 4 3 3

 countZerosOnesTwos([0,1,2,2,1,1,1,0,0,0,0],11) // 5 4 2
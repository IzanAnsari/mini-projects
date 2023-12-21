// VII - you are given a 2d array you have to find the sum of first and last colum.
// sample input-i :
 var mat=[
[5,6,7,8,9],
[4,3,2,1,0],
[3,6,9,8,7]
]

// output  : (Hint: first column sum  5+4+3 => 12 and lastColumn sum 9+0+7 =>16 so the answer would be 12+16 => 28)

function lastAndFirst(mat){
    res=''
    for(i=0;i<mat[0].length;i++){
        for(j=0;j<mat.length;j++){
            if(j==0 || j==mat.length-1){
                // res+=mat[j][i]+" "
            }
        }
    }
    console.log(mat[i][j])
    // console.log(res)
}
lastAndFirst(mat)
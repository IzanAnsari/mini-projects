// VII- Dots and Waves.
// You are given a number stored in a variable name N.
// print the required pattern such that in the range of [1,N]. if the number is odd print single string "~" else print N Times star(*) i.e N* without space.
// look at the example for better understanding.
// for e.g N = 5
// output:
// ~
// *****
// ~
// *****
// ~

function patternWave(N){
    for(var i=1;i<=N;i++){
        res=''
        if(i%2!=0){
            for(j=0;j<=N;j++){
                res+= '~ '
                break
            }
        }
        // console.log('\n')
        // console.log(res)
        else if(i%2==0){
            for(k=0;k<=N;k++){
                res+='* '
            }
        }
        console.log(res)
    }

}
patternWave(6)
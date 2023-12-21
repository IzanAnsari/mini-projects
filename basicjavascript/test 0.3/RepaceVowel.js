// X- You are given a string, you have to replace all the vowels with *
// (Do not Use inbuit Method)
// sample input-i : nature
// sample output-i : n*t*r
//   * (Hint: a,u,e are vowels so they got replaced)

// sample input-ii  : fear 
// sample output-ii :f**r
// str=["fear"]
function vowels(str){

    for(i=0;i<str.length;i++){
        res=''
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            res+='*'
            // console.log(res)
        }else{
            res+=str[i]

            // console.log(res)
        }
            console.log(res)
    }
}
vowels("fear")
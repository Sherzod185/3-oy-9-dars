//arrayga faqat bo'sh stringni yig'ish /zo'r

let a= "S 2 h 0 e 0 r 1 z 17 o 22 d"
let array=[]
function arr(num, arry) {
 for (let i=0; i<num.length; i++){
  if(num[i]!=" "){
    continue
  } else{
    arry.push(num[i])
  }
 }
 return arry
}
console.log(arr(a, array));
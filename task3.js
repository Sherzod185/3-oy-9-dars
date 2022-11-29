//3arrayga raqamlarni bo'sh stringsiz yig'ish

 let a= "S 2 h 0 e 0 r 1 z 17 o 22 d"
let array=[]
let sum=``
function arr(num, arry, count) {
for (let i = 0; i<num.length; i++){
  num[i]=Number(num[i])
  if(num[i]%1!=0){
    continue
  } else if(num[i]==" "){
    continue
  }
  else {
   count+=num[i]
  }
}
arry.push(count)
return arry
}
console.log(arr(a, array, sum));
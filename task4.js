//4.arrayga harflarni yig'ish bo'sh stringsiz

let a= "S 2 h 0 e 0 r 1 z 17 o 22 d"
let array=[]
let sum="";
function arr(num, arry, count) {
for (let i =0; i<num.length; i++){
  if(!(num[i]%1==0)){
    count+=num[i]
  }
}
arry.push(count)
return arry
}
console.log(arr(a, array, sum));
let arr = [1,2,3,5,20,5]
function grow(x){
let count = 1
for (let i=0; i<x.length; i++){
  count*=x[i]
}
return count
}
console.log(grow(arr));
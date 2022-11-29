const arr = [5,12,8,130,44]
function findIndex(Array, cbfunction) {
  let count=`No such value is defined in the array`;
  for (let i=0; i<Array.length; i++){
   if( cbfunction(Array[i])){
    count=i
    break
   }
  }
  return count
}

let sum = findIndex (arr, e=>{
  return e==8
})
console.log(sum);
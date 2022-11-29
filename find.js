let arr = [
{
  id:0,
  name:"Sherzod",
  age:21
},
{
  id:1,
  name:"Behzod",
  age:23
},
{
  id:2,
  name:"Azizbek",
  age:14
}

]
function search(Array, cbfun) {
  let natija="Bunaqa object yo'q"
  for(let i=0; i<Array.length; i++){
if(cbfun(Array[i])){
  natija=Array[i]
  break;
}
  }
  return natija
}
let sum=search(arr, e=>{
  return e.age == 14
})
console.log(sum)

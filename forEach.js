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
  function dubfor(Array, cbfun){
    let natija=[];
    for(let i=0; i<Array.length; i++){
   if(cbfun(Array[i])){
    natija.push(Array[i])
   }
    }
    return natija
  }
  let result=dubfor(arr, e=>{
    if(e.age>14){
      return e
    }
  })
  console.log(result);
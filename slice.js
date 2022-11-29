let son1;
let son2;
function slicedublicat(num1, num2){

  let arr=[
    {
      id:0,
      name:"Sherzod",
      region:"Surxondaryo",
      age:21
    },
    {
      id:1,
      name:"Samandar",
      region:"Samarqand",
      age:19
    },
    {
      id:2,
      name:"Samandar",
      region:"Toshkent",
      age:20
    },
    {
      id:3,
      name:"Odil",
      region:"Samarqand",
      age:14
    }
  ]
let Array=[]
for(let i=num1; i<num2; i++){
  Array.push(arr[i])
}
return Array

}

let natija=slicedublicat(0,2)

console.log(natija);



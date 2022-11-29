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
      },
    ]
    function dubfil (Array, dubfunc){
      let Arr=[]
      for (let i=0; i<Array.length; i++){
        if(dubfunc(Array[i])){
          Arr.push(Array[i])
        }
      }
      return Arr
    }

    let sum= dubfil(arr, e=> e.region == "Samarqand")

    console.log(sum);
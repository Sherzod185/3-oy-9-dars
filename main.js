// 1. arrda shellow copy

// let arr=["Sherzod Boboxonov"]
// let arr2=arr
// console.log(arr2);

// 2. SPRIT METHOD arrda copy qilish

// let arr=["Sherzod Boboxonov"]
// let arr2=[...arr]
// arr2.push(" Behzod Boboxonov")
// console.log(arr, arr2);

//3. MAP METHOD COPY

// let arr = ["Sherzod"]
// let arr2=arr.map(e=>e+" Behzod")
// console.log(arr2);

// 4. CONCAT METHOD birnechta arr ni 1ta arr ga jamlab beradi  

// let arr = ["Sherzod"]
// let arr2 = ["Behzod"]
// let arr3 = ["Azizbek"]
// let arr4 =arr.concat(arr2, arr3)
// console.log(arr4);

// 5. findIndex indexsi nechidaligini
// bu kodda 41 dan katta sonni indexni topdik 4 

// const arr = [5,12,8,130,44]
// const x = (e)=> e == 41
// console.log(arr.findIndex(x));

// 6. topilgan qiymatni qaytaradi Call back function ishlatiladi

// let arr=[
//   {
//     id:0,
//     name:"Sherzod",
//     region:"Surxondaryo",
//     age:21
//   },
//   {
//     id:1,
//     name:"Samandar",
//     region:"Samarqand",
//     age:19
//   },
//   {
//     id:2,
//     name:"Samandar",
//     region:"Toshkent",
//     age:20
//   },
//   {
//     id:3,
//     name:"Odil",
//     region:"Samarqand",
//     age:14
//   },
// ]
// const search=arr.find(e=> e.age ==22)
// console.log(search);

// 7. forEach forga o'xshash ishlaydi CallBack functionda

// let arr=[
//     {
//       id:0,
//       name:"Sherzod",
//       region:"Surxondaryo",
//       age:21
//     },
//     {
//       id:1,
//       name:"Samandar",
//       region:"Samarqand",
//       age:19
//     },
//     {
//       id:2,
//       name:"Samandar",
//       region:"Toshkent",
//       age:20
//     },
//     {
//       id:3,
//       name:"Odil",
//       region:"Samarqand",
//       age:14
//     },
//   ]
//   arr.forEach((e)=>{
//     if(e.age>15){
//       console.log(e);
//     }
//   })

// 8. sort Method tartib bilan sortlab beradi. birinchidagiga qarab faqat masalan [12,235,3,5,654]

// let arr = [5,16,22,3455,667,8]
// console.log(arr.sort());

// 9. Slice method (0,2) indexlar orasini qirqib qaytarib beradi

// let arr=[
//       {
//         id:0,
//         name:"Sherzod",
//         region:"Surxondaryo",
//         age:21
//       },
//       {
//         id:1,
//         name:"Samandar",
//         region:"Samarqand",
//         age:19
//       },
//       {
//         id:2,
//         name:"Samandar",
//         region:"Toshkent",
//         age:20
//       },
//       {
//         id:3,
//         name:"Odil",
//         region:"Samarqand",
//         age:14
//       },
//     ]
//     let natija = arr.slice(0,2)
//     console.log(natija);

// 10. splice  orasiga element qo'shish

// let arr=[
//       {
//         id:0,
//         name:"Sherzod",
//         region:"Surxondaryo",
//         age:21
//       },
//       {
//         id:1,
//         name:"Samandar",
//         region:"Samarqand",
//         age:19
//       },
//       {
//         id:2,
//         name:"Samandar",
//         region:"Toshkent",
//         age:20
//       },
//       {
//         id:3,
//         name:"Odil",
//         region:"Samarqand",
//         age:14
//       },
//     ]
//     arr.splice(1,0, "salom")
//     console.log(arr);

// 11 Flat -- ichma ich arrayni yoyib yuboradi

// let arr=[[13,"asdf"],["salom",17],["Sherzod",45,45]]
// console.log(arr.flat());

// 12 split  -- stringni arrga keltirish

// let str="12,517526586xgf"
// console.log(str.split("2"));

// 13 . join arr ni matn ko'rinishiga keltiradi

// let arr = [12,55,65,45]
// console.log(arr.join);

// slice ni proektda ishlatilishi qisqacha

// let str = "lorem alllllkf fldfk" 
// let nstr=str.length>10 ? str.slice(0,9)+ "..." : str
// console.log(nstr);

// 14. filter filter qilib chiqaradi

// let arr=[
//       {
//         id:0,
//         name:"Sherzod",
//         region:"Surxondaryo",
//         age:21
//       },
//       {
//         id:1,
//         name:"Samandar",
//         region:"Samarqand",
//         age:19
//       },
//       {
//         id:2,
//         name:"Samandar",
//         region:"Toshkent",
//         age:20
//       },
//       {
//         id:3,
//         name:"Odil",
//         region:"Samarqand",
//         age:14
//       },
//     ]

//     let result = arr.filter(e=>{
//      return e.region == "Samarqand"
//     })
//     console.log(result);
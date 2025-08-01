// let z = [1,2,3,4,5];
// for(const i of z){
//     console.log(i)
// }

// let y = "Hello world";
// for(const i of y){
//     if(i==" "){
//         continue;
//     }
//     console.log(`each char is ${i}`)
// }

// const map = new Map();
// map.set("pa","pakistan");
// map.set("fr","france");
// map.set("in","india")
// map.delete("in")
// console.log(map.size)
// console.log(map.get("pa"))
// console.log(map)

// for(let [keys,values] of map){
//     console.log(keys + ":-" + values)
// }

// for (const key of map.keys()) {
//   console.log(key);
// }
// for (const val of map.values()) {
//   console.log(val);
// }

// let z = {
//     name:"awais",
//     name2:"bilal",
// }
// Object.keys(z).forEach(key => {
//     console.log(key)
// });
// Object.values(z).forEach((value)=>{
//     console.log(value)
// })


// for(let i in z){
//     console.log(`${i} :- ${Object[i]}`)
// }

// let z = ["ja","c++","ruby"];
// for(let i in z){
//     console.log(z[i])
// }

// let z = ["ja","c++","ruby"];
// z.forEach(function (val){
//     console.log(val)
// }
// )

// z.forEach((item,index,arr)=>{
//     console.log(index,item,arr)
// })

// let z = [
//     {
//         languagename : "javascript",
//         filename : "js"
//     },
//     {
//         languagename : "java",
//         filename : "java"
//     },
//     {
//         languagename : "python",
//         filename : "py"
//     }
// ]
// z.forEach((key)=>{
//     console.log(key.filename)
//     console.log(key.languagename)

// })


// let z = [1,2,3,4,5,6]
// let y = z.filter((nums)=>{
//     return nums>5
// })
// console.log(y)

// let y = [];
// z.forEach((val)=>{
//     if(val>4){
//         y.push(val)
//     }
// })
// console.log(y)

// let y = z.map((val)=>{
//     return val+10;
// })
// console.log(y)

// z.forEach((val)=>{
//     val = val+10;
//     console.log(val)
// })

// let z = [1,2,3,4,5,6]
// let y = 
//         z.map((val)=>(val*10))
//         .map((val)=>(val+1))
//         .filter((val)=>(val>23))
    
// console.log(y)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let z = [1,2,3,4]
// // let y = z.reduce((acc,curr)=>{
// //     return acc+curr;
// // },0)
// console.log(y)

// let total = 0;
// for(let i of z){
//     total = total+i;
    
// }
// console.log(total)

// let shopping = [
//     {
//         item : "java",
//         price:500
//     },
//     {
//         item : "js",
//         price:1000
//     },
//     {
//         item : "py",
//         price:1500
//     },
//     {
//         item : "c++",
//         price:2000
//     },
// ]
// let y = shopping.reduce((acc,item)=>{
//     return acc+item.price;
// },0)
// console.log(y)













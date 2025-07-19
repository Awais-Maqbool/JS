const symb = Symbol("key1");

let z = {
    name:"awais",
    "full name" : "awais Maqbool",
    [symb]:"Keyone",
    age:18,
    work:"student",
};



// console.log(z.name)
// console.log(z["name"])
// console.log(z["full name"])
// console.log(typeof (z[symb]))

// z.name = "bilal";
// console.log(z.name);
// Object.freeze(z);
// z.name = "talha";
// z.age = 19;
// console.log(z.name)
// console.log(z.age)

//console.log(`my name is ${z["name"]} and my age is ${z["age"]}`)

z.greeting = function (){
    console.log(`hlo js user my name is ${this.name} and my age is ${this.age}`)
}

console.log(z.greeting())

// let user = [
//     {
//         name:"awais",
//         age:12,
//     },
//     {
//         name:"bilal",
//         age : 13,
//     },
// ]
// console.log(user[1].age)

// let obj1 = {1:"a",2:"b"}
// let obj2 = {3:"a",4:"b"}
// let result = {...obj1,...obj2}
// console.log(result)

// let arr = {
//     name:"awais",
//     age:12,
//     isloggedin:true,
// }

// Object.keys(arr).forEach((key)=>{
//     console.log(key)
// })

// Object.values(arr).forEach((val)=>{
//     console.log(val)
// })

// Object.entries(arr).forEach((ent)=>{
//     console.log(ent)
// })

// console.log(arr.hasOwnProperty("name"))
// console.log(arr.age.toLocaleString())
console.log(arr.valueOf(arr.name))
// console.log(typeof arr.age)



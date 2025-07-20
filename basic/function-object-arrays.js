// function cp (val1,val2,...num1){
//     return val2
// }
// let n = cp(1,2,3,4,5,5)
// console.log(n)

function call(a){
    return a = `my name is ${a.name} and my age is ${a.age}`
}

console.log(call({
        name:"awais",
        age:12,
}))

function call(a){
    console.log(`my name is ${a[0]} and my age is ${a[1]}`)
}

call([1,2,3,"awais","bilal"])

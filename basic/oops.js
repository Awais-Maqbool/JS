// let obj = {
//     name:"awais",
//     age:12,

//     yes : function(){
//         console.log(this.name);
//         console.log(this);
        
//     }
    
// }
// console.log(obj.age);
// console.log(obj["age"]);
// console.log(obj.yes());
// // obj.yes()
// console.log(this);

// function user(name,age){
//     this.name = name
//     this.age=age 

//     let greet = function(){
//         console.log(this.name);
        
//     }
// }

// let userone = new user("awais",12)
// let usertwo = new user("maqbool",10)
// console.log(userone.constructor);
// // console.log(usertwo);






function z(name,age){
    this.name  = name
    this.age = age

    return this
}

let z1 = new z("awais",10)
let z2 = new z("bilal",12)
console.log(z1);
console.log(z2);




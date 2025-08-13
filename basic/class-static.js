// +++++++++++++++++++++Classes+++++++++++

// class z{
//     constructor(name,email,password){
//         this.name = name
//         this.email = email
//         this.password = password
//     }

//     encryptpassword(){
//         return `${this.password}abc`; 
//     }

//     username(){
//         return `${this.name.toUpperCase()}`
//     }

//     useremail(){
//         return `${this.email.replace("@","*")}`
//     }
    
// }
// let chai = new z("awais","awais@gmail","123")
// console.log(chai.encryptpassword());
// console.log(chai.username());
// console.log(chai.useremail());



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=Functons+++++++++++++++++++




// function user(name,email,password){
//     this.name = name
//         this.email = email
//         this.password = password
// }

// user.prototype.encryptpassword=function(){
//     return `${this.password}abc`; 
// }

// user.prototype.username = function(){
//     return `${this.name.toUpperCase()}`
// }

// let tea = new user("tea","tea@gmail","123")
// console.log(tea.encryptpassword());



// ++++++++++++++++++++++++++++++++++++++++++==Inheritence+++++++++++++++++++++++++

// class user{
//     constructor(name){
//         this.name = name
//     }

//     login(){
//         return `my name is ${this.name}`
//     }

//     print(){
//         console.log("i am user method")
//     }
// }

// class teacher extends user{
//     constructor(name,email,age){
//         super(name)
//         this.email=email
//         this.age=age

//     }
//     talhe(){
//         return `i am teacher my name is ${this.name}`
//     }
//     teac2(){
//         console.log("i am teaacher method")
//     }
// }

// let teac1 = new teacher("awais","awais@gmai","123")
// // console.log(teac1);
// // console.log(teac1.talhe())
// // console.log(teac1.login())


// let user1 = new user("bilal","bilal@gmail")
// console.log(user1.login());
// console.log(user1.talhe())
// user1.print()
// user1.teac2



// ++++++++++++++++++++++++++++++++++++++++++++++++++++Static ++++++++++++++++++++++++++++++++++++++++++++++++

class user{
    constructor(name){
        this.name = name
    }

    printname(){
        console.log(`my name is ${this.name}`);
    }
    static callname(){
        console.log(`my name is ${this.name}`);
    }
}

let u  = new user("awais")
console.log(u);
u.printname()
// u.callname()

class teaacher extends user{
    constructor(name,email){
        super(name)
        this.email=email
    }

}

let teach1 = new teaacher("awais@gmail")
teach1.printname()



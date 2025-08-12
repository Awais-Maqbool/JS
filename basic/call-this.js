function setusername(username){
    this.username = username
}

function createusername(username,email,password){

    setusername.call(this,username)

    this.email = email
    this.password = password
}

let chai = new createusername("awais","awais@gmail","1234")
console.log(chai);

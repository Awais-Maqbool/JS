function add(a,b){
   
    return a+b
}
console.log(add(5,6));

function name (username = "zain"){
    if(username===undefined){
        console.log("plz enter ur name");
        return;
    }
    return `${username} is here`
}
console.log(name())

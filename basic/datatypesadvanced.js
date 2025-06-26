//Primitive datatype:
//(boolean,number,symbol,bigint,string,null,undefined);
const id = Symbol('123');
const id2 = Symbol('123');
console.log(id===id2);
console.log(typeof id);

let z = null;
console.log(typeof null);

//non primitive
//(arrays functions objects)

const heros = ["awais","maqbool"];
let obj = {
    name:"awais",
    age : 22,
}
console.log(obj[1])

const fun = function(){
    console.log("awais");
}



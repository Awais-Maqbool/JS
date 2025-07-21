function chai(){
    console.log("chai");
}
chai();

(function chai(){
    console.log("chai2")  // named iife
})();

(()=>{
    console.log("chai3")  //unnamed iife
})();

((name)=>{
    console.log(`my name is ${this.name}`)
})("awais");
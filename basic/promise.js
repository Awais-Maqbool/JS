let promiseone = new Promise((resolve,reject)=>{



    setTimeout(()=>{
        console.log("asynchorus tasked");
        resolve()
    },3000)
})

promiseone.then((()=>{
    console.log("promise consumed");
    
}))

new Promise(((resolve,reject)=>{
    setTimeout(()=>{
        console.log("asynchorus tasked 2");
        resolve()
    },1000)
})).then(()=>{
    console.log("consumed promised 2");
    
})


let promisethree =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promised 3");
        resolve([1,2,3,4])
        // resolve()
    },1000)
})

promisethree.then((user)=>{
    console.log(user);
    
})


let promisefour = new Promise((resolve,reject)=>{
    let error = false
   
    setTimeout(()=>{
    if(!error){
        resolve({name:"awais"})
    }else{
        reject("something went wrong")
    }
    },1000)
   
})

promisefour.then((user)=>{
   return user.name
    
}).then((username)=>{
    console.log(username); 
}).catch((error)=>{
    console.log(error);
    
}).finally(()=> console.log("finally the promise resolve or rejected"))


let promisefive = new Promise((resolve,reject)=>{
    let error = true
   
    setTimeout(()=>{
    if(!error){
        resolve({name:"awais"})
    }else{
        reject("something went wrong")
    }
    },1000)
   
})

promisefive.then((user)=>{
    return user
}).then((username)=>{
    console.log(username); 
}).catch((error)=>{
    console.log(error);
    
})

let x = async ()=>{
    try {
        let r = await promisefive
        console.log(r);
        
    } catch (error) {
        console.log(error)
    }
}
x()




let y = async ()=>{
    try{
    let response = await fetch('https://api.github.com/users/Awais-Maqbool')
    // console.log(response);
    let z = await response.json()
    console.log(z);
}catch(error){
    console.log(error);
    
}
}
y()

fetch("https://api.github.com/users/hiteshchoudhary").
then((user)=>{
    return user.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})





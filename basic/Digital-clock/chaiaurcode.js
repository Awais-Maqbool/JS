let clock = document.querySelector("#clock")



setInterval(()=>{
    let date = new Date().toLocaleString()
    clock.innerHTML=` ${date}`
},1000);




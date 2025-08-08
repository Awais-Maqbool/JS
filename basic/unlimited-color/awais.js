let colors = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
// let colors = ["red","green","blue"]

let ran = (()=>{   
     return colors[Math.floor(Math.random()*colors.length)]
})
// console.log(ran())


 


document.querySelector("#start").addEventListener("click", (e)=>{
    
    let y = (()=>{
        let sum = "#"
for (let i = 0;i<6;i++){
    
    // let x = console.log(ran(i))
    sum += ran(i)
}
    console.log(sum);
    
        document.body.style.backgroundColor=sum
    })
    let z = setInterval(y,1000)

    document.querySelector("#stop").addEventListener("click",(e)=>{
        clearInterval(z)
    })

})
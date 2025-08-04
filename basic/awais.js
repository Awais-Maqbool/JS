let y = document.getElementsByClassName("button")
console.log(y[0])
// let body = document.body

let x = Array.from(y)

x.forEach((z)=>{
    z.addEventListener("click",(e)=>{
        switch (z.id){
            case "grey":
                document.body.style.backgroundColor="grey"
                break
            case "blue":
                document.body.style.backgroundColor="blue"
                break
            case "yellow":
                document.body.style.backgroundColor="yellow"
                break
            case "white":
                document.body.style.backgroundColor="white"
                break
        }
    })
})
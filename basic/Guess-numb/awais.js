let randomnumb = Math.floor(Math.random()*100+1)

let gf = document.querySelector(".guessField")
let subbtn = document.querySelector(".guessSubmit")
let pg = document.querySelector(".guesses")
let rg = document.querySelector(".lastResult")
let lh = document.querySelector(".lowOrHi")
let rp = document.querySelector(".resultParas")


let p = document.createElement("p")

prevguess = []
remainguess=1

startgame = true;

if(startgame){
    subbtn.addEventListener("click",(e)=>{
        e.preventDefault()
        let guess = gf.value 
        console.log(guess);
        validguess(guess)
    })
}

function validguess(guess){
    if(guess == "" ||  guess < 0 || guess>100 || isNaN(guess)){
        console.log(`please put valid index according to conditions ${guess}`)
    }
    else{
        prevguess.push(guess)
        if(remainguess==11){
            displaymessage(`you lost the game and random value is : ${randomnumb}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess == randomnumb){
        displaymessage("you won the game");
        endgame()
    }
    else if(guess<randomnumb){
        displaymessage("guess is too low");
    }
    else if(guess>randomnumb){
        displaymessage("guess is too high");
    }
}

function displayguess(guess){
    gf.value=""
    pg.innerHTML+=`${guess} `
    remainguess++
    rg.innerHTML=`${11-remainguess}`
} 

function displaymessage(message){
    lh.innerHTML=`<h2> ${message} <h2/>`
    // lh.innerText = `${message}`
}

function newgame(){
    let newbtn = document.querySelector('#newgame')
    newbtn.addEventListener("click",(e)=>{
        randomnumb = Math.floor(Math.random()*100+1)
        pg.innerHTML=""
        remainguess = 1
        rg.innerHTML=`${11-remainguess}`
        gf.removeAttribute("disabled")
        // rp.removeChild(p)

        startgame = true

    })
}

function endgame(){
    
    gf.value=""
    gf.setAttribute("disabled","")
    p.classList.add('button')
    p.innerHTML='<h2 id = "newgame" > Start new game </h2>'
    rp.appendChild(p)
    startgame = false
    newgame ()
}
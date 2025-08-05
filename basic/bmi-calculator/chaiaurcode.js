let form = document.querySelector("button")

form.addEventListener("click",(e)=>{
    e.preventDefault()

    let height = (document.querySelector("#height").value)
    let weight = (document.querySelector("#weight").value)
    let result = document.querySelector("#results")

    if(height === "" || height < 0 || isNaN(height)){
    result.innerHTML=`enter valid height ${height}`
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
    result.innerHTML=`enter valid weight ${weight}`
    }
    else{
        let bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML=`${bmi}`
    }

})
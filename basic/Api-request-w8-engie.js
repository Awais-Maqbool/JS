// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Api request</title>
// </head>
// <style>
//   body{
//     background-color: #414141;
//     color: #fff;
//   }
// </style>
// <body>
   
//     <!-- <img style="height: 100%; width: 100%; object-fit: cover;" src="" alt=""> -->

//     <button id="btn">click me</button>
// </body>
// <script>
//   document.querySelector("#btn").addEventListener("click",(e)=>{
//      const url = 'https://api.github.com/users/hiteshchoudhary'
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET',url)
//     xhr.onreadystatechange = function(){
//        console.log(xhr.readyState);
//        if(xhr.readyState===4 && xhr.status === 200){
//         // console.log(this.responseText);
//         let data = JSON.parse(this.responseText)
//         console.log(data);
        
//         // console.log(data.followers)
//         // console.log(data.login)
//         // console.log(data.gravatar_id)

//         // let div = document.createElement("div")
//         // console.log(div)
//         // div.id="name"
//         // div.innerText=data.name
//         // document.body.appendChild(div)

//         // // let img = document.querySelector("img");
//         // // img.src = data.avatar_url;
      
//         // let img = document.createElement("img")
//         // console.log(img);
//         // img.id="image"
//         // img.style.height = "100%"
//         // img.style.width = '100%'
//         // img.style.objectFit = "cover"
//         // img.src=data.avatar_url
//         // document.body.appendChild(img)

//         // console.log(data.name);
//         // console.log(data.avatar_url);

        
        
//        }
//     }
   
//     xhr.send()
//   })
   



  
// </script>
// </html>
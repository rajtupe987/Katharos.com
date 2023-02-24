let user=document.querySelector("#user");

setTimeout(()=>{
    user.addEventListener("click",()=>{
        window.location.assign("./register.html")
    })
},1000)
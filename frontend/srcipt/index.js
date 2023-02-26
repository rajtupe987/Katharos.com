let user=document.querySelector("#user");

user.addEventListener("click",()=>{

    setTimeout(()=>{
        window.location.assign("./register.html")
    },1000);
    
})

let bag=document.querySelector("#bag");


bag.addEventListener("click",()=>{

    setTimeout(()=>{
        window.location.assign("./bag.html")
    },1000)

    
})
let user=document.querySelector("#user");

setTimeout(()=>{
    user.addEventListener("click",()=>{
        window.location.assign("./register.html")
    })
},1000);

let bag=document.querySelector("#bag");

setTimeout(()=>{
    bag.addEventListener("click",()=>{
        window.location.assign("./bag.html")
    })
},1000)
let username = localStorage.getItem("username")

document.querySelector("#username").innerText = `Hello, ${username}`








let user=document.querySelector("#user");

user.addEventListener("click",()=>{

    setTimeout(()=>{
       location.href="./register.html"
    },1000);
    
})

let bag=document.querySelector("#bag");


bag.addEventListener("click",()=>{

    setTimeout(()=>{
       location.href="./bag.html"
    },1000)

    
});


let SHOPE=document.querySelector("#SHOPE_ALL_THE_DEALS");

SHOPE.addEventListener("click",()=>{
    setTimeout(()=>{
        location.href="./women.html"
    },1000)
})


let SHOPE_BEST_SELLERS=document.querySelector("#SHOPE_BEST_SELLERS");

SHOPE_BEST_SELLERS.addEventListener("click",()=>{
    setTimeout(()=>{
        location.href="./TOPS & SWEATERS.html"
    },1000)
})




const btn1=document.getElementById("btn1");
const modal=document.querySelector(".modal");
const btnClose=document.querySelector(".modal-content-close");

btn1.addEventListener("click",()=>{
    modal.classList.remove("hidden");
    
})

btnClose.addEventListener("click",()=>{
    modal.classList.add("hidden");
})
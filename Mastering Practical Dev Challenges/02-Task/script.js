let first=document.querySelector(".img1");
let second=document.querySelector(".img2");
let btn=document.querySelector("#changeImage");

btn.addEventListener("click",function(){
        let tempSrc = first.src; 
        first.src = second.src; 
        second.src = tempSrc; 
})
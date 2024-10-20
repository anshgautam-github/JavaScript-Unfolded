const block=document.querySelector("#block");
const unblock=document.querySelector("#unblock");

const h2=document.querySelector("#status span");

block.addEventListener("click",function(){
        localStorage.setItem("block",true);
        show();
})

unblock.addEventListener("click",function(){
        localStorage.setItem("block",false);
        show();
})

function show(){
        if(localStorage.getItem("block")==='false'){
                h2.textContent="Not blocked";
        }
        else{
                h2.textContent="Blocked";
        }
}


show();
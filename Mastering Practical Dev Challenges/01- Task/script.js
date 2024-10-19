var p=document.querySelector(".para");
var b=document.querySelector("#btn");
b.addEventListener("click",function(){
        p.textContent = "sdsdsdd"

})

//var p=document.querySelector(".para").textContent;
//dont select it like this because it will select the string and not the reference of the dom element which doesn't 
//have the text content property
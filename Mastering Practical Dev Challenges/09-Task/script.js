var txtarea= document.querySelector("textarea"); 
var count=document.querySelector("#counter");

txtarea.addEventListener("input",function(){
        count.textContent=txtarea.value.length;
})
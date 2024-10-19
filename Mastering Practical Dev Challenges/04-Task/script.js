let add=document.querySelector("#add");
let remove=document.querySelector("#remove");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let li;

//we are creating li here so it can be used in both the add and remove event listeners fucntions 
add.addEventListener("click",function() {
        if(inp.value.trim()==="") {}
        else{
               li= document.createElement("li");
               li.textContent = inp.value;
                ul.appendChild(li);
                inp.value="";
        }
})

remove.addEventListener("click",function(){
        ul.removeChild(li);
} )
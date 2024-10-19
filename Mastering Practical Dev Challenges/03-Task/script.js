//whenevr working with the forms, when we forms get submit the page automatically refreshes and fir 
//js nahi chal payegi , isliye first step is to remove the default behavior
//because before the js runs, before that the page itself is refreshed

// var form=document.querySelector("form");
// var input1=document.querySelector(".inp1");
// var input2=document.querySelector(".inp2");
// var submit=document.querySelector(".button");
// var text=document.querySelector(".text");

// form.addEventListener("submit", function(e){
//         e.preventDefault();
//         if(input1.value==="" || input2.value===""){
//                 text.textContent="oops, Error occured!!";
//         }else{
//                 text.textContent="";
//                 input1.value="";
//                 input2.value="";
//         }
// })

//PROBLEM IN THIS CODE->> what if there are multiple input fields
//then u dont have to select multiple fields one by one using querySelector we did

//so for that now we can use document.querySelectorAll instead->> we get a nodeList with querySelectorAll
//Nodelist is like an array not fully so we can use forEach over it , let's see ->>

// var form=document.querySelector("form");
// var inps=document.querySelectorAll("input[type=text]");
// var text=document.querySelector(".text")

// form.addEventListener("submit",function(e){
//         e.preventDefault();
//         inps.forEach(function(inp){
//                 if(inp.value===""){
//                         text.textContent="oops, Error occured!!";
//                 }
//                 else{
//                         text.textContent="";
//                         inps.forEach(function(inp){inp.value=""});
//                 }
//         })
// })

//here , with the problem with forEach is , When using forEach, if the first input field is empty 
//but the second one has a value, the form still clears both inputs without showing an error. 
//This happens because the forEach loop checks each input one at a time, and it only updates the message
// or clears the fields based on the current input being checked, rather than considering all inputs
// together before making a decision.


//so we can use a for loop _>>>
var form = document.querySelector("form");
var inps = document.querySelectorAll("input[type=text]");
var text = document.querySelector(".text");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var allFilled = true; // Flag to track if all inputs are filled

    for (var i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === "") {
            text.textContent = "Oops, Error occurred!!";
            allFilled = false;
            break; // Stop further checking if any input is empty
        }
    }

    // If all inputs are filled, clear the form and the message
    if (allFilled) {
        text.textContent = ""; // Clear the error message
        inps.forEach(function(inp) {
            inp.value = ""; // Clear all input fields
        });
    }
});


//In the previous approach using forEach, each input was checked one at a time. If one input was empty,
// it set the error message, but if a later input had a value, the form cleared both the inputs and removed the 
//How the for loop solves the problem:
//The for loop goes through all the inputs and stops immediately when it finds an empty input using the break 
//statement.error message—leading to inconsistent behavior.
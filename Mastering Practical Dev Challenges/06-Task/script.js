var home=document.querySelector('#home');
var about=document.querySelector('#about');
var contact=document.querySelector('#contact');

var homeText=document.querySelector('#homeText');
var aboutText=document.querySelector('#aboutText');
var contactText=document.querySelector('#contactText');

homeText.style.display="block";
homeText.style.width="50%";

home.addEventListener('click',function() {   
    removeAlreadyText()
    homeText.style.display="block";
    homeText.style.width="50%";
});


about.addEventListener('click',function() {   
    removeAlreadyText()
    aboutText.style.display="block";
    aboutText.style.width="50%";
});

contact.addEventListener('click',function() { 
    removeAlreadyText()  
    contactText.style.display="block";
    contactText.style.width="50%";
});

function removeAlreadyText() {
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display="none";
    })
}



//MAKE IT MORE OPTIMIZE 
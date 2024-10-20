const btn= document.querySelector("#getuser");

function getNewUser(){
        fetch(`https://randomuser.me/api/`)
                .then(raw=> raw.json())
                .then(result =>{
                        const {name, email, gender,picture}=result.results[0];
                        document.querySelector("#parent").innerHTML+= `<div class="card bg-gray-800 p-4 rounded-lg">
                        <img src="${picture.large}" class="w-20 h-20 rounded-full mb-4">
                        <h3 class="text-xl font-semibold">${name.first}</h3>
                        <h5 class="text-sm text-gray-400">${gender}</h5>
                        <h6 class="text-sm text-gray-500 mt-2">${email}</h6>
                        <p class="text-sm text-gray-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique optio quam rem blanditiis.</p>
                        </div>`
                })
}

btn.addEventListener("click",function(){
        getNewUser();
})


let ham = document.querySelector(".toggle");
let show = document.querySelector("#menu");
let hamImg = document.querySelector("#ham-img");
let closeImg = document.querySelector("#close-img");

ham.addEventListener("click", function(){
    if(show.style.display=="block"){
        show.style.display="none";
        closeImg.style.display="none";
        hamImg.style.display="block";
    }
    else{
        show.style.display="block";
        closeImg.style.display="block";
        hamImg.style.display="none";
    }
})



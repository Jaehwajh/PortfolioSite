//refresh to top
window.onbeforeunload = () => {  
    document.body.scrollTo(0,0);  
    document.documentElement.scrollTo(0,0);
  };


// fade in

let reveal = document.querySelector("#fadeInMain")

function fadeIn(){
    reveal.classList.add("active")
}

window.addEventListener("DOMContentLoaded", fadeIn)



let revealspan = document.querySelector("#fadeInSpan")

function fadeInSpan(){
    revealspan.classList.add("active")
}

window.addEventListener("DOMContentLoaded", fadeInSpan)



// scrolling navbar

// function smallNavBar(){
//     let smallerBar = document.querySelectorAll(".navbar")

//     for(let i = 0; i < smallerBar.length; i++){
//         let windowHeight = window.innerHeight;
//         let elementTop = smallerBar[i].getBoundingClientRect().top;
//         let elementVisible = 100;

//         if(elementTop < windowHeight - elementVisible){

//         }
//     }
// }


// navbar click

// scroll to top

let btn = document.querySelector(".toTopBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}


document.querySelector("#toTop").addEventListener("click", toTopPage)

function toTopPage(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// MENU SHOW WHICH IS HIDDEN 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    })
}
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    })
}

// ACCESS ALL LINKS 
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu"); 
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// SERVICES MODAL
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener("click", () =>{
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", ()=> {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})
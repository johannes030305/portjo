const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = documnet.querySelector('#menu-icon');
let navlist = documnet.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
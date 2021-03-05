const nav = document.querySelector('.navigation')
const burger = document.querySelector('.burger')

function togglemenu() {
    nav.classList.toggle('navactive')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', togglemenu)
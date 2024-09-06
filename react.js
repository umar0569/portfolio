burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
list = document.querySelector('.list')

burger.addEventListener('click', () => {
    list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav');

})
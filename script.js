const  menuIcon = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navegacion');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})
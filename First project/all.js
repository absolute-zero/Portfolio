let menu = document.getElementById('menu'),
    mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
});
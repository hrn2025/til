document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-button');
    const menuNav = document.getElementById('menu');

    menuBtn.addEventListener('click', ()=> {
        if(menuBtn.getAttribute('aria-expanded') === 'true') {
            menuBtn.setAttribute('aria-expanded', 'false');
            menuNav.classList.remove('active');

        } else {
            menuBtn.setAttribute('aria-expanded', 'true');
            menuNav.classList.add('active');
        }
    });

});
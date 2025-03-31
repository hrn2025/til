document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-button');
    const menuNav = document.getElementById('menu');
    const menuContent = document.querySelector('ul');

    // ハンバーガーメニューの開閉
    function toggleMenu () {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        menuNav.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    };
    menuBtn.addEventListener('click', toggleMenu);

    // ハンバーガーメニュー外をクリックしてもメニューを閉じる
    menuNav.addEventListener('click', (event) => {
        if (event.target === menuNav && !menuContent.classList.contains(event.target)) {
        toggleMenu();
    };
    });

    // ESCキーでメニューを閉じる
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

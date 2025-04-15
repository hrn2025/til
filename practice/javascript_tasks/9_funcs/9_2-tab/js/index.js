document.addEventListener('DOMContentLoaded', () => {
    // ---------------------- ハンバーガーメニュー ここから
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

    // ---------------------- ハンバーガーメニュー ここまで
    // ---------------------- タブ切り替え ここから
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', () => {
            tabPanels.forEach(panel => {
                if (panel.getAttribute('aria-labelledby') !== tabButton.id) {
                    panel.classList.add('is-hidden');
                } else {
                    panel.classList.remove('is-hidden');
                }
            });
            tabButtons.forEach(btn => {
                if (btn !== tabButton) {
                    btn.setAttribute('aria-selected', 'false');
                }
            });
            tabButton.setAttribute('aria-selected', 'true');
        });
    });
    // ---------------------- タブ切り替え ここまで


});



        // tabPanel.classList.toggle('is-hidden');





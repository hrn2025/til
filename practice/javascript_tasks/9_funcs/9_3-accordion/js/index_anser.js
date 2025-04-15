document.addEventListener('DOMContentLoaded', () => {
    //  ハンバガーメニュー ここから --------------------------------------------
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

    //  ハンバガーメニュー ここまで --------------------------------------------
    // タブ切り替え ここから --------------------------------------------
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach((tabButton, index) => {
        tabButton.addEventListener('click', () => {
            //ボタンとパネルをすべて非選択状態へ変更
            tabButtons.forEach(btn => btn.setAttribute('aria-selected', false));
            tabPanels.forEach(panel => panel.classList.add('is-hidden'));
            //クリックしたボタンと同じindexのパネルを選択状態へ変更
            tabButton.setAttribute('aria-selected', true);
            tabPanels[index].classList.remove('is-hidden');
        });
    });
    // タブ切り替え ここまで --------------------------------------------
    // アコーディオン ここから --------------------------------------------
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionPanels = document.querySelectorAll('.accordion-panel');

    accordionButtons.forEach((accordionButton, index) => {
        accordionButton.addEventListener('click', ()=> {
            const caretIcon = accordionButton.querySelector('i');
            const accordionIsExpanded = accordionButton.getAttribute('aria-expanded') === 'true';

                accordionButton.setAttribute('aria-expanded', !accordionIsExpanded);
                caretIcon.classList.toggle('fa-caret-right');
                caretIcon.classList.toggle('fa-caret-down');
                accordionPanels[index].classList.toggle('active');
        });
    });
    // アコーディオン ここまで --------------------------------------------

});









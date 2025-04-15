document.addEventListener("DOMContentLoaded", () => {
    //  ハンバガーメニュー ここから --------------------------------------------
    const menuBtn = document.querySelector(".js-menu-button");
    const menuNav = document.querySelector(".js-menu");
    const menuContent = document.querySelector(".js-menu__list");

    // ハンバーガーメニューの開閉
    function toggleMenu() {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !isExpanded);
        menuNav.classList.toggle("is-active");
        document.body.style.overflow = isExpanded ? "" : "hidden";
    }
    if (menuBtn) {
        menuBtn.addEventListener("click", toggleMenu);
    };

    // ハンバーガーメニュー外やメニューリンクをクリックしてもメニューを閉じる
    menuNav.addEventListener("click", (event) => {
        if (
            event.target === menuNav ||
            !menuContent.contains(event.target) ||
            event.target.closest('.menu__link')
        ) {
            toggleMenu();
        }
    });

    // ESCキーでメニューを閉じる
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuNav.classList.contains("is-active")) {
            toggleMenu();
        }
    });

    //  ハンバガーメニュー ここまで --------------------------------------------
    // タブ切り替え ここから --------------------------------------------
    const tabButtons = document.querySelectorAll(".js-tab-button");
    const tabPanels = document.querySelectorAll(".js-tab-panel");

    tabButtons.forEach((tabButton, index) => {
        tabButton.addEventListener("click", () => {
            //ボタンとパネルをすべて非選択状態へ変更
            tabButtons.forEach((btn) => btn.setAttribute("aria-selected", false));
            tabPanels.forEach((panel) => panel.classList.add("is-hidden"));
            //クリックしたボタンと同じindexのパネルを選択状態へ変更
            tabButton.setAttribute("aria-selected", true);
            tabPanels[index].classList.remove("is-hidden");
        });
    });
    // タブ切り替え ここまで --------------------------------------------
    // アコーディオン ここから --------------------------------------------
    const accordionButtons = document.querySelectorAll(".js-accordion-button");
    const accordionPanels = document.querySelectorAll(".js-accordion-panel");

    accordionButtons.forEach((accordionButton, index) => {
        accordionButton.addEventListener("click", () => {
            const caretIcon = accordionButton.querySelector(".js-accordion-icon");
            const panel = accordionPanels[index];
            if (panel.style.height) {
                panel.style.height = null;
              } else {
                panel.style.height = panel.scrollHeight + 40 + "px";
              };

            const accordionIsExpanded =
                accordionButton.getAttribute("aria-expanded") === "true";

            accordionButton.setAttribute("aria-expanded", !accordionIsExpanded);
            caretIcon.classList.toggle("fa-caret-right");
            caretIcon.classList.toggle("fa-caret-down");
            panel.classList.toggle("is-active");
        });
    });
    // アコーディオン ここまで --------------------------------------------
    // パララックス ここから --------------------------------------------

    // 要素がViewportに現れたらtrueを返す関数
    // const inViewport = (elem) => {
    //     const rect = elem.getBoundingClientRect(); // 要素のビューポート基準の位置とサイズ情報を返すメソッド
    //     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    //     // 要素の上部がビューポートの下部よりも上にある（つまり少なくとも上部が見えている）
    //     return rect.top <= windowHeight * 0.8; // 画面の80%の位置で発火
    // };

    // const sectionParallax = () => {
    //     const parallaxSections = document.querySelectorAll(".js-parallax-section");
    //     parallaxSections.forEach((parallaxSection) => {
    //         if (inViewport(parallaxSection)) {
    //             parallaxSection.classList.add("is-active");
    //         }
    //     });
    // };
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    });

    document.querySelectorAll('.js-parallax-section').forEach(el =>{
        observer.observe(el);
    });
    // パララックス ここまで --------------------------------------------
    // トップへ戻るボタン ここから --------------------------------------------
    const pageTop = document.getElementById('page-top');
    let lastScrollY = 0;

    window.addEventListener("scroll", () => {
        // sectionParallax();
        const currentScrollY = window.scrollY;
        // トップボタンの表示/非表示
        if (currentScrollY === 0) {
            // ページ最上部ならボタンを非表示
            pageTop.classList.add('is-hidden');
        } else {
            // それ以外ではボタンを表示
            pageTop.classList.remove('is-hidden');
        };
        // 現在のスクロール位置を保存（次回のスクロール方向判定用）
        lastScrollY = currentScrollY;
    });

    // トップへ戻るボタン ここまで --------------------------------------------
});

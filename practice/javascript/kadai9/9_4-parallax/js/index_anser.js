document.addEventListener("DOMContentLoaded", () => {
    //  ハンバガーメニュー ここから --------------------------------------------
    const menuBtn = document.querySelector(".js-menu-button");
    const menuNav = document.querySelector("js-menu");
    const menuContent = document.querySelector(".js-menu__list");

    // ハンバーガーメニューの開閉
    function toggleMenu() {
        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", !isExpanded);
        menuNav.classList.toggle("active");
        document.body.style.overflow = isExpanded ? "" : "hidden";
    }
    menuBtn.addEventListener("click", toggleMenu);

    // ハンバーガーメニュー外をクリックしてもメニューを閉じる
    menuNav.addEventListener("click", (event) => {
        if (
            event.target === menuNav &&
            !menuContent.classList.contains(event.target)
        ) {
            toggleMenu();
        }
    });

    // ESCキーでメニューを閉じる
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuNav.classList.contains("active")) {
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
            const caretIcon = accordionButton.querySelector("i");
            const accordionIsExpanded =
                accordionButton.getAttribute("aria-expanded") === "true";

            accordionButton.setAttribute("aria-expanded", !accordionIsExpanded);
            caretIcon.classList.toggle("fa-caret-right");
            caretIcon.classList.toggle("fa-caret-down");
            accordionPanels[index].classList.toggle("active");
        });
    });
    // アコーディオン ここまで --------------------------------------------
    // パララックス ここから --------------------------------------------

    // 要素がViewportに現れたらtrueを返す関数
    const inViewport = (elem) => {
        const rect = elem.getBoundingClientRect();
        return (
            rect.top >= 0 && //コンテンツ上部がViewportに見えてかつ
            rect.left >= 0 && //コンテンツ左部がViewportに見えてかつ（2つ合わせて左上）
            //コンテンツ右下がブラウザ幅高より小さい、すなわち全部見えておらず、ちらっと見えたら
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const sectionParallax = () => {
        const parallaxSections = document.querySelectorAll(".js-parallax-section");
        parallaxSections.forEach((parallaxSection) => {
            if (inViewport(parallaxSection)) {
                parallaxSection.classList.add("visualization");
            }
        });
    };

    const pageTop = document.getElementById('pagetop');
    let lastScrollY = 0;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            //ページトップ時の処理
            pageTop.classList.add('pagetop-hidden');
        } else if (currentScrollY > lastScrollY) {
            //スクロールダウン時の処理
            sectionParallax();
            pageTop.classList.remove('pagetop-hidden');
        } else {
            //スクロールアップ時の処理
            pageTop.classList.add('pagetop-hidden');
        };

    });

    // パララックス ここまで --------------------------------------------
});

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
    }

    // ハンバーガーメニュー外やメニューリンクをクリックしてもメニューを閉じる
    menuNav.addEventListener("click", (event) => {
        if (
            event.target === menuNav ||
            !menuContent.contains(event.target) ||
            event.target.closest(".menu__link")
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
            }

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
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
        }
    );

    document.querySelectorAll(".js-parallax-section").forEach((el) => {
        observer.observe(el);
    });


    // パララックス ここまで --------------------------------------------
    // トップへ戻るボタン ここから --------------------------------------------
    const pageTop = document.getElementById("page-top");
    let lastScrollY = 0;

    window.addEventListener("scroll", () => {
        // sectionParallax();
        const currentScrollY = window.scrollY;
        // トップボタンの表示/非表示
        if (currentScrollY === 0) {
            // ページ最上部ならボタンを非表示
            pageTop.classList.add("is-hidden");
        } else {
            // それ以外ではボタンを表示
            pageTop.classList.remove("is-hidden");
        }
        // 現在のスクロール位置を保存（次回のスクロール方向判定用）
        lastScrollY = currentScrollY;
    });
    // トップへ戻るボタン ここまで --------------------------------------------
    // モーダル ここから --------------------------------------------
    const modal = document.querySelector('.js-modal');
    const modalButtonOpen = document.querySelector('.js-modal-button-open');
    const modalButtonCloseX = document.querySelector('.js-modal-button-close-x');
    const modalButtonClose = document.querySelector('.js-modal-button-close');
    const modalPanel = document.querySelector('.js-modal-panel');
    const modalListWrap = document.querySelector('.js-modal-list-wrapper');

    // モーダル内のフォーカス操作に関する変数
    const modalFocusElements = modalListWrap.querySelectorAll('button, [href], select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusElem = modalFocusElements[0];
    const lastFocusElem = modalFocusElements[modalFocusElements.length - 1];

    const modalOpen = () => {
        if(modalPanel && !modalPanel.classList.contains('is-active')) {
            // パララックス効果を一時的に無効化
            if (modal) modal.classList.remove('js-parallax-section');
            modalPanel.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        };
        // フォーカスを最初のフォーカス可能な要素へ移動
        if (modalFocusElements.length > 0) {
            firstFocusElem.focus();
        };
    };

    const modalClose = () => {
        if(modalPanel && modalPanel.classList.contains('is-active')) {
            modalPanel.classList.remove('is-active');
            document.body.style.overflow = '';
            // パララックス効果を元に戻す
            if (modal) modal.classList.add('js-parallax-section');
            // フォーカスを「開く」ボタンに戻す
            if (modalButtonOpen) modalButtonOpen.focus();
        };
    };

    if (modalButtonOpen) modalButtonOpen.addEventListener('click', modalOpen);
    if (modalButtonClose) modalButtonClose.addEventListener('click', modalClose);
    if (modalButtonCloseX) modalButtonCloseX.addEventListener('click', modalClose);
    // モーダル外をクリックした場合もモーダルを閉じる
    if (modalPanel) {
        modalPanel.addEventListener('click', (event) => {
            if (modalListWrap && !modalListWrap.contains(event.target)) {
                modalClose();
            }
        });
    }
    // モーダル内でのキー操作
    document.addEventListener('keydown', (event) => {
        // Escapeキーで閉じる
        if (event.key === 'Escape' && modalPanel && modalPanel.classList.contains('is-active')) {
            modalClose();
        };
        // モーダル内でのみTabキーが移動するようにする
        if (event.key === 'Tab' && modalPanel && modalPanel.classList.contains('is-active')) {
            if (event.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusElem) {
                    lastFocusElem.focus();
                    event.preventDefault();
                };
            } else { // Tab
                if (document.activeElement === lastFocusElem) {
                    firstFocusElem.focus();
                    event.preventDefault();
                };
            };
        };
    });
    // モーダル ここまで --------------------------------------------
});

$(function() {
    //  ハンバガーメニュー ここから --------------------------------------------
    const $menuBtn = $(".js-menu-button");
    const $menuNav = $(".js-menu");
    const $menuContent = $(".js-menu__list");
    const breakpoint = 768; // スマートフォンとみなす画面幅の閾値 (px)

    // ハンバーガーメニューの開閉
    function toggleMenu() {
        if (window.innerWidth <= breakpoint) { // スマートフォン以下の場合のみ実行
        const isExpanded = $menuBtn.attr("aria-expanded") === "true";
        $menuBtn.attr("aria-expanded", !isExpanded);
        $menuNav.toggleClass("is-active");
        $("body").css("overflow", isExpanded ? "" : "hidden");
        }
    }
    if ($menuBtn.length) {
        $menuBtn.on("click", toggleMenu);
    }

    // ハンバーガーメニュー外やメニューリンクをクリックしてもメニューを閉じる
    $menuNav.on("click", function(event) {
        const isClickOutsideMenu = event.target === this;
        const isClickOutsideContent = $menuContent.has(event.target).length;
        const isClickOnLink = $(event.target).closest(".menu__link").length;

        if ((isClickOutsideMenu && !isClickOutsideContent) || isClickOnLink) {
            toggleMenu();
        }
    });

    // ESCキーでメニューを閉じる
    $(document).on("keydown", function(event) {
        if (event.key === "Escape" && $menuNav.hasClass("is-active")) {
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
    const $accordionButtons = $(".js-accordion-button");
    const $accordionPanels = $(".js-accordion-panel");

    $accordionButtons.each(function(index) {
        const $accordionButton = $(this);
        const $caretIcon = $accordionButton.find(".js-accordion-icon");
        const $panel = $accordionPanels.eq(index);

        $accordionButton.on("click", function() {
            const isExpanded = $accordionButton.attr("aria-expanded") === "true";
            $accordionButton.attr("aria-expanded", !isExpanded);
            $caretIcon.toggleClass("fa-caret-right fa-caret-down");
            $panel.toggleClass("is-active");

            if (!$panel.hasClass("is-active")) {
                $panel.css("height", 0);
            } else {
                $panel.css("height", "auto");
            }
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
            // if (modal) modal.classList.add('js-parallax-section');
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

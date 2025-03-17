document.addEventListener("DOMContentLoaded", () => {
  const headerNavList = document.getElementById("header-nav-list");
  const headerNavBtn = document.querySelector(".header-nav-btn");

  if (headerNavList && headerNavBtn) {
    // ハンバーガーメニューの開閉処理

    headerNavBtn.addEventListener("click", () => {
      const expanded = headerNavBtn.getAttribute("aria-expanded") === "true";
      headerNavBtn.setAttribute("aria-expanded", !expanded);
      headerNavList.classList.toggle("active");
    });

    // ページ内リンクのクリック処理
    headerNavList.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView();
          // スクロール完了後にチェックを外す（少し遅延させる）
          setTimeout(() => {
            headerNavBtn.setAttribute("aria-expanded", "false");
            headerNavList.classList.remove("active");
          }, 50); // 適切な遅延時間を設定
        }
      }
    });
  }
});

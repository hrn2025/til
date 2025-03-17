document.addEventListener('DOMContentLoaded', function() {
    const headerNavList = document.querySelector('.header-nav-list');
    const headerNavBtn = document.querySelector('.header-nav-btn');

    if (headerNavList && headerNavBtn) {
      // ハンバーガーメニューの開閉処理

      headerNavBtn.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        headerNavList.classList.toggle('active');
      });
  
      // ページ内リンクのクリック処理
      headerNavList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
          event.preventDefault();
          const targetId = event.target.getAttribute('href').slice(1);
          const targetElement = document.getElementById(targetId);
  
          if (targetElement) {
            // スクロール
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
  
            // スクロール完了後にチェックを外す（少し遅延させる）
            setTimeout(() => {
              headerNavBtn.setAttribute('aria-expanded', 'false');
              headerNavList.classList.remove('active');
            }, 500); // 適切な遅延時間を設定
          }
        }
      });
    }
  });
  
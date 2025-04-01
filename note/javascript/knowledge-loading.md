# JavaScriptの読み込みに関する処理まとめ

## スクリプト読み込み方法と特徴

| 読み込み方法 | 属性 | 説明 | 利点 | 欠点 | おすすめの利用シーン |
|--------------|------|------|------|------|----------------------|
| 通常の読み込み | なし | HTMLの上から順番にスクリプトを読み込み、実行 | シンプルで分かりやすい | HTMLの解析を遅らせる | 小規模なスクリプト |
| `defer`属性 | `defer` | HTML解析の最後に、スクリプトを順番に実行 | HTML解析を妨げない<br>スクリプト間の依存関係を維持 | 古いブラウザで非対応 | 複数のスクリプト<br>依存関係のあるライブラリ |
| `async`属性 | `async` | ダウンロード完了次第、即座に実行 | 最速のダウンロード<br>他のスクリプトを遅延させない | 実行順序が保証されない | 独立したスクリプト<br>解析に依存しないもの |
| 動的スクリプト読み込み | JavaScript | JavaScriptでスクリプトを動的に追加 | 条件付き読み込み<br>柔軟性が高い | 追加の実装が必要 | 条件に応じた読み込み |
| `DOMContentLoaded` | イベント | DOMツリー完成後に実行 | DOM準備完了を確実に保証 | やや遅い実行タイミング | DOM操作を必要とするスクリプト |
| `load`イベント | イベント | すべてのリソース読み込み後に実行 | すべてのリソースの読み込みを確実に保証 | 最も遅い実行タイミング | 完全な初期化が必要な場合 |
| 即時関数 | なし | 定義と同時に実行される関数 | グローバル変数の汚染を防ぐ<br>即座に実行 | 他の関数から参照できない | プライベートスコープの作成<br>初期化処理 |

## コード例

### 通常の読み込み
```html
<script src="script.js"></script>
```

### defer属性
```html
<script src="script.js" defer></script>
```

### async属性
```html
<script src="script.js" async></script>
```

### 動的スクリプト読み込み
```javascript
const script = document.createElement('script');
script.src = 'script.js';
document.head.appendChild(script);
```

### DOMContentLoaded
```javascript
document.addEventListener('DOMContentLoaded', () => {
  // DOM準備完了後の処理
});
```

### load イベント
```javascript
window.addEventListener('load', () => {
  // すべてのリソース読み込み完了後の処理
});
```

### 即時関数
```javascript
// 関数式の即時実行
(function() {
  // プライベートスコープ
  const privateVariable = 'Hello';
  console.log(privateVariable);
})();

// アロー関数を使用した即時実行
(() => {
  // プライベートスコープ
  const privateVariable = 'World';
  console.log(privateVariable);
})();
```

## 推奨プラクティス
1. 可能な限り`defer`属性を使用
2. 独立したスクリプトには`async`属性
3. 重要なDOM操作は`DOMContentLoaded`で実行
4. グローバル変数の汚染を防ぐため、即時関数を活用
5. パフォーマンスを常に意識

**注意**: ブラウザの互換性と具体的なユースケースに応じて、適切な読み込み方法を選択してください。

> Claude
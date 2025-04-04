# SMACSSの基本ガイド

## SMACSSとは

CSS設計手法のひとつで、CSSコードを論理的に整理し、保守性と再利用性を高めるための方法論です。
「Scalable and Modular Architecture for CSS」の略称で、Jonathan Snookによって提唱されました。

## カテゴリと役割

| カテゴリ | 役割 | 例 |
|---------|------|-----|
| **ベース** | 要素のデフォルトスタイル（リセットCSS含む） | `body {}`, `a {}` |
| **レイアウト** | ページの大枠構造（ヘッダー/メインエリア等） | `.l-header {}`, `.l-main {}` |
| **モジュール** | 再利用可能なUIパーツ（ボタン/カード等） | `.button {}`, `.card {}` |
| **ステート** | 状態変化（表示/非表示等） | `.is-active {}`, `.is-hidden {}` |
| **テーマ** | カラースキームやデザインテーマ | `.theme-dark {}`, `.theme-font {}` |

## 命名規則とプレフィックス

- **レイアウト**: `l-` プレフィックス（例: `l-header`, `l-sidebar`）
- **ステート**: `is-` プレフィックス（例: `is-active`, `is-disabled`）
- **テーマ**: `theme-` プレフィックス（例: `theme-dark`, `theme-corporate`）
- **モジュール**: プレフィックスなし、意味のある名前を使用

## 注意点

1. **公式と実務の差**: 
   - SMACSS公式では `-` をクラス名の区切りとして基本としていますが、実務では BEM 記法（`__` や `--`）を混合して使う傾向があります

2. **ステートクラス**: 
   - `is-active` のようにプレフィックスで状態を管理します（`--` ではなく `is-` を推奨）
   - JavaScript による状態変化の管理に特に有効です

3. **ファイル分割**: 
   - 記号による区別よりも、カテゴリによる分類が重要です
   - 例: `module/` フォルダ内に `_btn.scss`, `_card.scss` など

4. **BEM記法の流用**:
   - Modifier 表現に BEM 記法を流用する現場も多いです
   - 例: `.button--primary`, `.card--featured`

## FLOCSSとの違い

| 比較項目 | SMACSS | FLOCSS |
|---------|--------|--------|
| **分類方法** | 5カテゴリ | 3層＋サブレイヤー（Foundation/Layout/Object） |
| **命名規則** | 緩やかなガイドライン | BEMを拡張した厳格なルール |
| **適正規模** | 中規模サイト | 大規模プロジェクト |
| **プレフィックス** | `l-`/`is-`のみ | `c-`/`p-`/`u-`等を厳密に使用 |

## 実践的なヒント

- SMACSSは厳格なルールというよりも、考え方のフレームワークとして捉えるとよいでしょう
- プロジェクトの規模や要件に合わせてカスタマイズして利用することが一般的です
- 一貫性を保つことが最も重要です - チーム内でルールを共有し守ることでメリットが最大化されます
- コンポーネント単位の開発が主流になる中で、モジュールとステートの区別が特に重要になっています
- SMACSSではクラスを基本とし、idは「JS連携用」や「慣例的に唯一性が保証される要素」に限って使用します

## サンプルコード

```scss
/* ベース */
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
}

/* レイアウト */
.l-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* モジュール */
.button {
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #0066cc;
  color: white;
  
  /* モジュールのバリエーション（BEM記法流用の例） */
  &--secondary {
    background-color: #666;
  }
  
  &--large {
    padding: 12px 24px;
    font-size: 1.2em;
  }
}

/* ステート */
.is-hidden {
  display: none;
}

/* テーマ */
.theme-dark {
  background-color: #222;
  color: #eee;
}
```

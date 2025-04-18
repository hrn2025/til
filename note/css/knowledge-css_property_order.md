# CSSプロパティの整理順序ガイド

## 基本的な整理カテゴリ

CSSプロパティを論理的に整理することで、コードの可読性と保守性が向上します。以下の順序に従うことをおすすめします。

### 1. レイアウト関連
- `position` (`static`, `relative`, `absolute`, `fixed`, `sticky`)
- `z-index`
- `top`, `right`, `bottom`, `left`
- `display` (`block`, `inline`, `inline-block`, `flex`, `grid`, `none`など)
- Flexbox関連 (`flex-direction`, `flex-wrap`, `justify-content`, `align-items`など)
- Grid関連 (`grid-template-columns`, `grid-template-rows`, `grid-area`など)
- `float`, `clear`

### 2. ボックスモデル
- `width`, `min-width`, `max-width`
- `height`, `min-height`, `max-height`
- `margin` (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`)
- `padding` (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`)
- `box-sizing`

### 3. 視覚的スタイル
- `background` (`background-color`, `background-image`, `background-position`など)
- `border` (`border-width`, `border-style`, `border-color`など)
- `border-radius`
- `box-shadow`
- `opacity`
- `visibility`
- `overflow`, `overflow-x`, `overflow-y`

### 4. テキスト関連
- `color`
- `font` (`font-family`, `font-size`, `font-weight`, `font-style`など)
- `text-align`, `text-decoration`, `text-transform`
- `line-height`
- `letter-spacing`, `word-spacing`
- `white-space`

### 5. アニメーション・トランジション
- `transition` (`transition-property`, `transition-duration`, `transition-timing-function`など)
- `transform` (`translate`, `rotate`, `scale`など)
- `animation` (`animation-name`, `animation-duration`, `animation-timing-function`など)

### 6. その他
- `cursor`
- `pointer-events`
- `list-style`
- `content` (疑似要素用)

## 実践的な例

```css
.container {
  /* レイアウト関連 */
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* ボックスモデル */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  /* 視覚的スタイル */
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* テキスト関連 */
  color: #333333;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;

  /* アニメーション */
  transition: all 0.3s ease;
}
```

## 整理のメリット

1. **コードの一貫性**: 同じ順序で常にプロパティを書くことで、どこにどのプロパティがあるか予測しやすくなります
2. **デバッグの効率化**: プロパティが整理されていると、問題のあるスタイルを素早く見つけられます
3. **チーム開発の円滑化**: 共通のルールがあることで、複数人での開発がスムーズになります
4. **CSSの挙動理解**: プロパティを論理的なグループで考えることで、CSSの仕組みをより深く理解できます

プロジェクトの要件に合わせて、このガイドラインをカスタマイズすることも検討してください。

> Claude
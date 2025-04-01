# textContent, innerText, innerHTML の違い

JavaScriptの`textContent`、`innerText`、`innerHTML`は、DOM要素の内容を取得・操作するためのプロパティですが、それぞれ動作が異なります。以下に初心者向けにわかりやすく説明します。

---

## **1. textContent**

### 特徴

- 要素内の**すべてのテキスト**を取得・設定します。
- HTMLタグは無視され、純粋なテキストだけを扱います。
- 非表示の要素（CSSで`display: none;`など）も含めてテキストを取得します。


### 使用例

```javascript
const element = document.getElementById("example");
console.log(element.textContent); // 要素内のすべてのテキストを取得
element.textContent = "新しいテキスト"; // 要素内のテキストを更新
```


### 適した用途

- **HTMLタグを無視してテキストだけを操作したい場合**。
- **パフォーマンスが重要な場合**（再計算や再描画が発生しない）。

---

## **2. innerText**

### 特徴

- 要素内の**表示されているテキスト**だけを取得・設定します。
- CSSで非表示になっている要素（例：`display: none;`）は無視されます。
- テキストの改行やスタイル（CSS）に影響されます。


### 使用例

```javascript
const element = document.getElementById("example");
console.log(element.innerText); // 表示されているテキストを取得
element.innerText = "こんにちは！"; // 表示されるテキストを更新
```


### 適した用途

- **ユーザーが実際に見えるテキストだけを操作したい場合**。
- **スタイル（CSS）の影響を考慮したい場合**。

---

## **3. innerHTML**

### 特徴

- 要素内の**HTML構造全体**（タグとテキスト）を取得・設定します。
- HTMLタグも文字列として扱えるため、要素内に新しいHTML構造を挿入できます。


### 使用例

```javascript
const element = document.getElementById("example");
console.log(element.innerHTML); // HTML構造全体を取得
element.innerHTML = "<strong>太字のテキスト</strong>"; // HTML構造ごと更新
```


### 適した用途

- **要素内のHTML構造全体を操作したい場合**。
- 動的にHTMLを生成する必要がある場合。

---

## **違いの比較**

| プロパティ | 取得内容 | 非表示要素 | HTMLタグ |
| :-- | :-- | :-- | :-- |
| `textContent` | 純粋なテキスト | 含む | 無視 |
| `innerText` | 表示されているテキストのみ | 含まない | 無視 |
| `innerHTML` | HTML構造全体（タグ＋テキスト） | 含む | 含む |

---

## **注意点**

1. `innerHTML`は外部から渡されたデータをそのまま挿入すると、セキュリティリスク（XSS攻撃）が発生する可能性があります。信頼できるデータのみ使用してください。
2. `textContent`は最もシンプルで安全ですが、HTMLタグが必要な場合には使えません。

これらの違いを理解して、適切な場面で使い分けることが重要です！  

> Perplexity


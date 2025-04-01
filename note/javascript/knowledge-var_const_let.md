# JavaScript変数宣言の違い: var, const, let

JavaScriptにおける`var`、`const`、`let`の主な違いは、スコープ、再宣言、再代入の可否です。以下に、それぞれの違いをJavaScriptの例を交えて説明します。

## 1. スコープ

* `var`: 関数スコープまたはグローバルスコープを持ちます。ブロックスコープはありません。
* `const`と`let`: ブロックスコープを持ちます。

```javascript
function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (varはブロックスコープを持たない)
}

function exampleLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // エラー: y is not defined (letはブロックスコープを持つ)
  console.log(z); // エラー: z is not defined (constはブロックスコープを持つ)
}

exampleVar();
exampleLetConst();
```

## 2. 再宣言

* `var`: 同じスコープ内で再宣言が可能です。
* `const`と`let`: 同じスコープ内での再宣言はエラーになります。

```javascript
var a = 1;
var a = 2; // 再宣言可能
console.log(a); // 2

let b = 3;
let b = 4; // エラー: Identifier 'b' has already been declared
```

## 3. 再代入

* `var`と`let`: 再代入が可能です。
* `const`: 再代入はエラーになります。

```javascript
var c = 5;
c = 6; // 再代入可能
console.log(c); // 6

let d = 7;
d = 8; // 再代入可能
console.log(d); // 8

const e = 9;
e = 10; // エラー: Assignment to constant variable.
```

## まとめ

| 特性 | var | let | const |
|------|-----|-----|-------|
| スコープ | 関数スコープ/グローバルスコープ | ブロックスコープ | ブロックスコープ |
| 再宣言 | 可能 | 不可 | 不可 |
| 再代入 | 可能 | 可能 | 不可 |

## 補足

* `const`で宣言されたオブジェクトや配列は、再代入はできませんが、プロパティや要素の変更は可能です。

```javascript
const obj = { prop: 1 };
obj.prop = 2; // プロパティの変更は可能
console.log(obj); // { prop: 2 }

const arr = [1, 2, 3];
arr.push(4); // 要素の追加は可能
console.log(arr); // [1, 2, 3, 4]
```

これらの違いを理解し、適切な変数宣言を使用することで、より安全で保守性の高いコードを書くことができます。

> Gemini
# classListとは

---

## classListとは

`classList`はJavaScriptのプロパティで、HTML要素の`class`属性を操作するために使用されます。このプロパティを利用することで、クラス名の追加、削除、切り替え、確認などを簡単に行うことができます。返り値は`DOMTokenList`オブジェクトであり、読み取り専用ですが専用のメソッドを用いてクラス操作が可能です。

---

## 主なメソッド一覧

| メソッド名 | 機能 |
| :-- | :-- |
| `add(class1, ...)` | 指定したクラスを追加します。 |
| `remove(class1, ...)` | 指定したクラスを削除します。 |
| `toggle(class[, force])` | 指定したクラスが存在すれば削除し、存在しなければ追加します。`force`を指定すると強制的に追加または削除できます。 |
| `contains(class)` | 指定したクラスが存在するかどうかを確認し、真偽値を返します。 |
| `replace(oldClass, newClass)` | 指定したクラスを別のクラスに置き換えます。 |
| `item(index)` | インデックスで指定した位置のクラス名を取得します。 |
| `length` | 現在のクラス数を取得するプロパティです。 |
| `toString()` | クラス名リストを文字列として返します。 |

---

### 使用例

```javascript
const element = document.createElement("div");

// クラスの追加
element.classList.add("foo", "bar");

// クラスの削除
element.classList.remove("foo");

// クラスの切り替え
element.classList.toggle("visible");

// クラスの置き換え
element.classList.replace("bar", "baz");

// クラスが含まれているか確認
console.log(element.classList.contains("baz")); // true

// クラス名リストを取得
console.log(element.classList.toString()); // "baz visible"
```

これらのメソッドにより、動的なスタイル変更や要素制御が効率的に行えます。

> Perplexity
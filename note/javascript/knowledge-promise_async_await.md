# JavaScriptのPromiseとasync/await

Promiseとasync/awaitは、JavaScriptにおける非同期処理を扱うための2つの異なる構文ですが、**深く関連しており、async/awaitはPromiseをより扱いやすくするために導入された構文です。**

## Promise

* Promiseは、非同期処理の結果（成功または失敗）を将来的に利用できるように表現するオブジェクトです。
* 非同期処理の状態（保留、履行、拒否）を持ちます。
* 非同期処理の結果に基づいて処理を行うために、`.then()`（成功時）と `.catch()`（失敗時）メソッドを使用します。
* 複数の非同期処理を連携させるために、`.then()` のチェーンや `Promise.all()`, `Promise.race()` などの静的メソッドを使用します。
* コールバック地獄（ネストが深くなる問題）を解消するのに役立ちます。

## async/await

* `async/await` は、Promiseベースの非同期処理を同期的なコードのように記述できるようにするためのシンタックスシュガー（より人間が読み書きしやすい構文）です。
* `async` キーワードを関数の宣言または式に追加すると、その関数は常にPromiseを返します。
* `await` キーワードは、`async` 関数内でのみ使用でき、PromiseがSettled状態（履行または拒否）になるまでその行の実行を一時停止します。
* `await` は、Promiseが履行された場合はその結果の値を返し、拒否された場合は例外をスローします。
* 例外処理には、通常の同期処理と同様に `try...catch` ブロックを使用できます。

## Promiseとasync/awaitの関係

1. **async/awaitはPromiseの上に構築されている:** `async` 関数は暗黙的にPromiseを返し、`await` はPromiseの解決を待機します。つまり、`async/await` を使ったコードは、内部的にはPromiseを操作しています。

2. **async/awaitはPromiseの記述をより簡潔にする:** `.then()` や `.catch()` のチェーンを深くネストさせる代わりに、`async/await` を使うことで、非同期処理を同期的な `try...catch` 構文で扱うことができ、コードの可読性が向上します。

3. **Promiseとasync/awaitは相互に利用可能:** `async` 関数はPromiseを返すため、その結果に対して `.then()` や `.catch()` を使用することができます。また、`.then()` や `.catch()` のコールバック関数内で `async` 関数を呼び出すことも可能です。

## 例で見るPromiseとasync/await

### Promiseを使った非同期処理:

```javascript
function fetchDataPromise() {
  return fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Promise データ:", data);
      return data;
    })
    .catch(error => {
      console.error("Promise エラー:", error);
      throw error;
    });
}

fetchDataPromise();
```

### async/awaitを使った同じ非同期処理:

```javascript
async function fetchDataAsync() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Async/await データ:", data);
    return data;
  } catch (error) {
    console.error("Async/await エラー:", error);
    throw error;
  }
}

fetchDataAsync();
```

上記の例からわかるように、`async/await` を使うと、非同期処理が同期的な `try...catch` ブロックで囲まれ、`.then()` のネストが解消され、より直感的にコードを理解しやすくなります。

## まとめ

* Promiseは非同期処理の結果を扱う基本的な仕組みです。
* async/awaitは、Promiseをよりシンプルで同期的な構文で記述するための糖衣構文です。
* `async` 関数はPromiseを返し、`await` はPromiseの解決を待ちます。
* エラー処理には `try...catch` を使用します。
* async/awaitはPromiseの上に構築されており、両者は密接に関連しています。

現在では、非同期処理を記述する際の推奨される主要な方法の一つとして `async/await` が広く使われています。Promiseの概念を理解した上で `async/await` を使用することで、より効率的で読みやすい非同期コードを書くことができます。

> Gemini 2025/04/11
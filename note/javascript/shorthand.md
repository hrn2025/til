# JavaScriptのショードハンド（短縮記法）まとめ

## アロー関数

```
// 通常の関数定義
function add(x, y) {
  return x + y;
}

// アロー関数（引数が2つ以上）
const add = (x, y) => x + y;

// アロー関数（引数が1つの場合、括弧省略）
const double = x => x * 2;

// アロー関数（引数がない場合、括弧を入れる）
const sayHello = () => console.log('こんにちは');
```

> 参考  
- [あなたが知らないJavaScriptの便利すぎるショートハンド19選](https://ascii.jp/elem/000/001/515/1515438/)
- Gemini
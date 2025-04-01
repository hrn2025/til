# スクリーンリーダー向けARIA属性の概要

| 属性 | 説明 | 使用例 | 使用場面 |
|------|------|--------|----------|
| `role` | 要素の役割や目的を定義 | `<div role="button">送信</div>` | 視覚的にはボタンのように見えるが、HTMLではdiv要素として作成されている場合 |
| `aria-label` | 要素のラベルを設定（視覚的なテキストが無い場合に使用） | `<button aria-label="閉じる">×</button>` | アイコンのみのボタンなど、視覚的にはわかるが、テキストコンテンツがない場合 |
| `aria-labelledby` | 他の要素のIDを参照して、その要素のテキストを現在の要素のラベルとして使用 | `<div id="title">予約フォーム</div><form aria-labelledby="title">...</form>` | フォームやダイアログなど、関連する見出しが別に存在する場合 |
| `aria-describedby` | 要素の詳細な説明を提供する別の要素のIDを参照 | `<input aria-describedby="pwd-hint"><div id="pwd-hint">8文字以上の英数字を使用してください</div>` | フォーム入力に関する追加情報・制約を示す場合 |
| `aria-expanded` | 折りたたみ可能な要素が展開されているかを示す | `<button aria-expanded="false">メニュー</button>` | ハンバーガーメニュー、アコーディオン、ドロップダウンなどの開閉状態を示す場合 |
| `aria-controls` | この要素が制御する別の要素のIDを指定 | `<button aria-controls="menu">メニュー</button><nav id="menu">...</nav>` | トグルボタンとそれによって制御されるコンテンツの関係を示す場合 |
| `aria-hidden` | 要素をスクリーンリーダーから隠す | `<div aria-hidden="true">装飾的な要素</div>` | 装飾的な要素や、重複した情報でスクリーンリーダーに読み上げさせる必要がない場合 |
| `aria-selected` | 選択可能な要素の選択状態を示す | `<div role="tab" aria-selected="true">タブ1</div>` | タブパネル、リストボックス、ツリーなどの選択状態を示す場合 |
| `aria-required` | 入力が必須であることを示す | `<input aria-required="true">` | 必須入力フィールドを示す場合 |
| `aria-invalid` | 入力値が無効であることを示す | `<input aria-invalid="true">` | バリデーションエラーがある入力フィールドを示す場合 |
| `aria-haspopup` | 要素に関連するポップアップ（メニューなど）があることを示す | `<button aria-haspopup="true">オプション</button>` | ドロップダウンメニューやコンテキストメニューを開くボタンなどに使用 |
| `aria-live` | 動的に変化するコンテンツの更新方法を指定 | `<div aria-live="polite">...</div>` | 非同期で更新される情報（エラーメッセージ、通知など）を示す場合 |
| `aria-atomic` | `aria-live`領域の更新時、全体を読み上げるか変更部分のみ読み上げるかを指定 | `<div aria-live="polite" aria-atomic="true">...</div>` | 更新時に全体の関係性を理解する必要がある場合 |
| `aria-busy` | 要素が更新中であることを示す | `<div aria-busy="true">...</div>` | 非同期でコンテンツが読み込まれる場合 |
| `aria-current` | 一連の関連要素内での現在のアイテムを示す | `<a aria-current="page">現在のページ</a>` | ナビゲーション内の現在のページ、ステップなどを示す場合 |
| `aria-disabled` | 要素が無効化されていることを示す | `<button aria-disabled="true">送信</button>` | 視覚的に無効化されているが、HTML属性の`disabled`を使用していない場合 |
## 補足
1. ARIAは既存のHTML要素の意味論を上書きするのではなく、拡張するために使用するべきです
1. 可能な限り、セマンティックなHTML要素（`<button>, <nav>, <header>`など）を使用することが最優先
1. 複数のARIA属性を組み合わせて使用することで、より詳細な情報を提供できます
> Claude
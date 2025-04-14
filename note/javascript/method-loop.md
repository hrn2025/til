# ミス
ループ処理でcreateElementしたが上書きされてしまった

## 原因
ループでcreateElementしたことにより、同じ要素を使いまわした

## 対策
createElementをループの中に入れる
# 比較について（if等）
## そもそも比較が必要か
- アコーディオン実装時は、ifで判定する必要が無く、`classList.toggle`をそのまま複数回使ってもよい発想がなかった

## オブジェクト同士を比較できる
例：クリックで発火したボタンオブジェクト(`tabButton`)とforeachで回すオブジェクト(`btn`)を比較する
`if (btn !== tabButton)`
# `git revert`で必要なファイルを消してしまった時の対処法

## 発生状況
間違ってpushしたファイルがあったので`git log`でコミットid確認、`git revert <コミットID>`したが、消してはいけないファイルも消してしまった。

## 原因
- `.gitignore`を用意したが、「pushしないファイルが発生」したのを意識できておらず、pushに含めてしまったことが1番の原因。
- `git revert`で消えてしまうファイルも意識できておらず、退避していなかった。

## 対策
1. push、commit前に確認：  
    - add時点で`git status`で差異を確認。
    - 特に大きな追加や修正の時は上階層も確認。
1. revert前に確認：  
    - 1つ前のcommitと今回のcommitの間で変更を入れたファイルは`git stash`で退避。
1. revert後にそのrevertをやめたい時：→今回すべきだった対処法
    - revertのrevertが安全（`git log --oneline`→`git revert <revert コミットのハッシュ>`）
    - `git checkout <問題のファイルが存在していた最新のコミットハッシュ> -- <消えてしまったファイル名>`で復旧したいファイルだけ復旧させて`git add`～でもよい。
    
重要な情報をpushしてしまった時はrevertのrevertでなく、履歴をすべて消す必要があるのでもっと大変。  
慎重に確認、コマンドを打つべき。
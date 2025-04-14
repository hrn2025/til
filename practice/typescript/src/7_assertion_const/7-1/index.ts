const item: number | string = 25;
let resultNum: number;

if(typeof item === 'number') {
    resultNum = item * 2;
} else {//エラー回避のため追加（コンソールを見やすくするため）
    resultNum = item;
}

console.log(resultNum); // 50
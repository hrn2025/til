// 1問目 代入できる
const greeting: string = 'Hello!';

// 2問目 代入できない
const num: 123 = '123';

// 3問目 代入できない
const era: '大正' | '昭和' | '平成' | '令和' = '平成9年';

// 次の変数を定義する
// ・trueのみを受け取る変数isOpen
// ・下記の値のいずれかを受け取る変数color
// "red""green""blue"

let isOpen : true;
let color : "red" | "green" | "blue";
// constで宣言すると初期値がいるためletで作成
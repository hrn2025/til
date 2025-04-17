// 2-2. 下記の処理を実装してください。
// ・unknown型の変数dataを宣言する
// ・dataが数値なら、コンソールに"This is a number"と表示
// ・dataが文字列なら、コンソールに"This is a string"と表示
// ・dataが真偽値なら、コンソールに"This is a boolean"と表示
// ・それ以外の値なら、コンソールに"Unknown type"と表示

let data: unknown;

// Type一覧
const matchingType: string[] = [ "number", "string", "boolean" ];

// 引数がType一覧のいづれかに一致したら文章を表示
const typeDisplay = (data: unknown) => {
    if(matchingType.includes(typeof data)) {
        console.log(`This is a ${typeof data}`);
    } else {
        console.log(`Unknown type`);
    }
};

// data = 25;
data = 'Hello!';
// data = true;
// data = null;
typeDisplay(data);
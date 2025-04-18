// 2-4. 下記の変数bookに型アサーションを使って、プロパティavailableをfalseに書き換え、その結果をコンソールに出力してください。
// ※コードを自分の環境にコピーして取り組んでください。

let book: unknown;
book = {
    title: "Cinderella",
    publicationYear: 1985,
    pages: 46,
    available: true
};

type Book = {
    title: string,
    publicationYear: number,
    pages: number,
    available: boolean
};

if((book as Book).available) {
    (book as Book).available = false;
    console.log((book as Book).available);
};
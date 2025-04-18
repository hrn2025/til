// 2-4. 下記の変数bookに型アサーションを使って、プロパティavailableをfalseに書き換え、その結果をコンソールに出力してください。
// ※コードを自分の環境にコピーして取り組んでください。

let book_anser: unknown;//エラー回避のため名前変更
book_anser = {
    title: "Cinderella",
    publicationYear: 1985,
    pages: 46,
    available: true
};

type Book_anser = {
    title: string,
    publicationYear: number,
    pages: number,
    available: boolean
};

// 型ガード関数
const isBook = (obj: unknown): obj is Book => {
    return typeof obj === "object" && obj !== null &&
    'available' in obj && typeof(obj as Book).available === "boolean";
};

// より安全な型チェック（型ガードの使用）
if (isBook(book_anser)) {
    book_anser.available = false;
    console.log(book_anser.available);
}




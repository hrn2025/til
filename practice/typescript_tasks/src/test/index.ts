const kanaTest = ["あ", "い"]; //string[]※コンソールは「object」と表示
// console.log(typeof kanaTest);

type idTest = { id: number };
const dataTest = [{ id: 100 }, { id: 200 }];
const idTestArray: idTest[] = [];
//もしdataTestの型がidTest[]だったらコンソールログに表示するという関数を作成




// const isIdTest = (obj: unknown) => {
//     if(typeof obj === typeof idTestArray) {
//         console.log(obj);
//     }
// }
// isIdTest(dataTest);


// // 型ガード関数
// const isBook = (obj: unknown): obj is Book => {
//     return typeof obj === "object" && obj !== null &&
//     'available' in obj && typeof(obj as Book).available === "boolean";
// };

// // より安全な型チェック（型ガードの使用）
// if (isBook(book_anser)) {
//     book_anser.available = false;
//     console.log(book_anser.available);
// }


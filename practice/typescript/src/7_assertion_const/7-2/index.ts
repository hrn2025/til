// ▼解答
const inputElement = document.getElementById('input') as HTMLInputElement;
// エラー内容
// 'inputElement' は 'null' の可能性があります。
// プロパティ 'value' は型 'HTMLElement' に存在しません。
// 型アサーションを使って、下記のコードのエラーを解消してみましょう。
inputElement.addEventListener('change', () => {
    console.log(inputElement.value);
  });


// const inputElement: HTMLElement | null = document.getElementById('input');
// // エラー内容
// // 'inputElement' は 'null' の可能性があります。
// // プロパティ 'value' は型 'HTMLElement' に存在しません。
// // 型アサーションを使って、下記のコードのエラーを解消してみましょう。
// (inputElement as HTMLInputElement).addEventListener('change', () => {
//   console.log((inputElement as HTMLInputElement).value);
// });
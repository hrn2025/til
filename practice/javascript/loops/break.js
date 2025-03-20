const items = document.querySelectorAll('.item');
console.log(items);
for (let i = 0; i < items.length; i++) {
    if (i === 2) {
        console.log("break！");
        break;
    }
    console.log(items[i].textContent);
}
//出力結果
// りんご
// みかん
// break!

//NodeList と HTMLCollectionの違いがある。querySelectorAll推奨。
// const items2 = document.getElementsByClassName('item');
// console.log(items2);
// for (let i = 0; i < items2.length; i++) {
//     if (i === 2) {
//         console.log("break！");
//         break;
//     }
//     console.log(items2[i].textContent);
// }




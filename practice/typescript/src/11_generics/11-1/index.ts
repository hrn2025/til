//配列の最初の要素を取得して返すジェネリクス関数 getFirstElement を完成させてください
// function getFirstElement<〇〇>(arr: 〇〇): 〇〇 {
//     return arr[0];
// }

// const firstNumber = getFirstElement([1, 2, 3]);
// console.log(firstNumber)

// const firstString = getFirstElement(["apple", "banana", "cherry"]);
// console.log(firstString)

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
console.log(firstNumber)

const firstString = getFirstElement<string>(["apple", "banana", "cherry"]);
console.log(firstString)
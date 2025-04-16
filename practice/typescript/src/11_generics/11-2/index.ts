// 2つの異なる型の値を受け取って配列で返すジェネリクス関数 makePair を完成させてください。
// function makePair<〇〇>(a: 〇〇, b: 〇〇): [〇〇] {
//     return [a, b];
// }

// const pair1 = makePair("hello", 42);
// console.log(pair1)

// const pair2 = makePair(true, { name: "Alice" });
// console.log(pair2)


// function makePair<T>(a: T, b: T): [T, T] {
//     return [a, b];
// }

// const pair1 = makePair<string | number>("hello", 42);
// console.log(pair1)

// const pair2 = makePair<boolean | object>(true, { name: "Alice" });
// console.log(pair2)


// anser
function makePair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}

const pair1 = makePair<string, number>("hello", 42);
console.log(pair1)

const pair2 = makePair<boolean, object>(true, { name: "Alice" });
console.log(pair2)
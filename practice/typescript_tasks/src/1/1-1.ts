// 2-1. 下記の通りに定数や変数を宣言し、値を代入してください。
// ・文字列を受け取る定数languageを宣言し、"TypeScript"と代入してください
// ・数値もしくはnullを受け取る定数codeを宣言し、200と代入してください
// ・"北"、"東"、"南"、もしくは"西"を受け取る定数directionを宣言し、"東"と代入してください
// ・boolean型の要素を受ける配列isAvailableを宣言し、[true, false, true]を代入してください

// ・personという名前のオブジェクトを宣言し、以下のプロパティを持つようにしてください
// 　　- プロパティ名：name
// 　　 値の型：文字列
// 　　 値：taichi
// 　　- プロパティ名：age
// 　　 値の型：数値
// 　　 値：18
// 　　- プロパティ名：isStudent
// 　　 値の型：真偽値
// 　　 値：true

const language: string = "TypeScript";
const code: number | null = 200;
const direction: "東" | "西" | "南" | "北" = "東";
const isAvailable: boolean[] = [true, false, true];
const person: {
    name: string,
    age: number,
    isStudent: boolean
}
= {
    name: "taichi",
    age: 18,
    isStudent: true
}
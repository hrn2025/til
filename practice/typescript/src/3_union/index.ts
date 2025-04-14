// 1問目 代入できる
const value1: number | boolean = false;

// 2問目 代入できないのでnumberを足した
const value3: string | undefined | number = 123;

// 3問目 代入できる
const value4: boolean | null = (value3 === 123);

let value : string | boolean ;
let num : number | undefined ;
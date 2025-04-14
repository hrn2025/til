const item: number | string = 25;
let resultNum: number;

if(typeof item === 'number') {
    resultNum = item * 2;
}

console.log(resultNum); // 50
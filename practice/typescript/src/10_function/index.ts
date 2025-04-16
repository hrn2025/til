// 次のコードの出力が期待どおりになるように、TypeScriptで関数 calculateSumAndAverage を実装する

// 関数 calculateSumAndAverage は以下の条件に従って実装してください：
// 引数 numbers には数値の配列を渡します。
// オプションの引数 multiplier には数値を渡します。指定されていなければ、自動的に 10 を掛けるようにしてください。

// 関数 calculateSumAndAverage の実装では、以下の2つのプロパティを含むオブジェクトを返してください：
// sum: 配列内の数値の合計。
// multiplicationResult: 合計値に multiplier を掛けた結果。multiplier が指定されていない場合は 10 を掛けた結果。

// 型定義 Result を作成し、戻り値の型として指定してください。

// 【補足】
// sum の計算には reduce を使用してもよいです。
// multiplier が undefined の場合は 10 を掛けて計算してください。

const calculateSumAndAverage = (numbers: number[], multiplier: number = 10) => {
    type Result = {
        sum: number;
        multiplicationResult: number;
    };

    const sumResult = numbers.reduce((acc: number, val: number): number => {
        return acc + val;
    });

    const multiResult = sumResult * multiplier;

    const resultObj: Result = {
        sum: sumResult,
        multiplicationResult: multiResult
    }

    return resultObj;
}


const result1 = calculateSumAndAverage([1, 2, 3, 4, 5], 2);
console.log(result1); // 出力結果: { sum: 15, multiplicationResult: 30 }

const result2 = calculateSumAndAverage([1, 2, 3, 4, 5]);
console.log(result2); // 出力結果: { sum: 15, multiplicationResult: 150 }

const result3 = calculateSumAndAverage([5, 5]);
console.log(result3); // 出力結果: { sum: 10, multiplicationResult: 100 }
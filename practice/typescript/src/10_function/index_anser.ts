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


// 改善点
// 型宣言は外に書く（Result）
// 戻り値の型定義 (Result 型)
// 指定があるかわからない引数（multiplier）にオプションプロパティ、multiplierの計算関数を追加
// 合計値は変わるので定数でなく変数（let）に。2回目の型宣言は不要
// reduce の初期値
// 変数名の可読性


type Result = {
    sum: number;
    multiplicationResult: number;
};

const calculateSumAndAverage_anser = (numbers: number[], multiplier?: number): Result => {
    let sumResult = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let multiplicationResult;
    if(multiplier) {
        multiplicationResult = sumResult * multiplier;
    } else {
        multiplicationResult = sumResult * 10;
    }
    const resultObj: Result = {
        sum: sumResult,
        multiplicationResult: multiplicationResult
    }

    return resultObj;
}


const result1_anser = calculateSumAndAverage([1, 2, 3, 4, 5], 2);
console.log(result1_anser); // 出力結果: { sum: 15, multiplicationResult: 30 }

const result2_anser = calculateSumAndAverage([1, 2, 3, 4, 5]);
console.log(result2_anser); // 出力結果: { sum: 15, multiplicationResult: 150 }

const result3_anser = calculateSumAndAverage([5, 5]);
console.log(result3_anser); // 出力結果: { sum: 10, multiplicationResult: 100 }
// 2-3. 下記の型を定義してください
// ・Statusという名前の型エイリアスを定義し、以下の値を持つユニオン型を作成してください
// 　　・"pending"
// 　　・"resolved"
// 　　・"rejected"
// ・上で定義したStatus型を使ってProcessという型エイリアスを定義し、以下のプロパティを持つようにしてください
// 　　- プロパティ名：id
// 　　 値の型：数値
// 　　- プロパティ名：title
// 　　 値の型：文字列
// 　　- プロパティ名：status
// 　　 値の型：Status型
// 　　- プロパティ名：manager
// 　　 値の型：文字列

// ・Employeeというインターフェースを定義し、以下のプロパティを持つようにしてください
// 　　- プロパティ名：name
// 　　 値の型：文字列
// 　　- プロパティ名：department
// 　　 値の型："営業"、"開発"、"人事"、"経理"のいずれか
// 　　- プロパティ名：position（※オプションにしてください）
// 　　 値の型：文字列
// 　　- プロパティ名：salary
// 　　 値の型：数値

// ・Countryという名前の型エイリアスを定義し、以下のプロパティを持つようにしてください
// 　　- プロパティ名：name（※読み取り専用にしてください）
// 　　 値の型：文字列
// 　　- プロパティ名：capital（※読み取り専用にしてください）
// 　　 値の型：文字列
// 　　- プロパティ名：population
// 　　 値の型：数値

type Status = "pending" | "resolved" | "rejected";
type Process = {
    id: number;
    title: string;
    status: Status;
    manager: string;
}
interface Employee {
    name: string;
    department: "営業" | "開発" | "人事" | "経理";
    position?: string;
    salary: number;
}
type Country = {
    readonly name: string;
    readonly capital: string;
    population: number;
}
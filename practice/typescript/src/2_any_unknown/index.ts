// let try_unknown: unknown;
// let try_unknown: unknown = 'Hello';
// let try_unknown: unknown = 100;
// let try_unknown: unknown = undefined;
// let try_unknown: unknown = '';
// let try_unknown: unknown = null;
let try_unknown: unknown = false;//エラー回避のため変数名変更

if(typeof try_unknown === 'string') {
    console.log(`${typeof try_unknown}:${try_unknown.length}`);
} else if (typeof try_unknown === 'number') {
    console.log(`${typeof try_unknown}:${try_unknown + 5}`);
} else {
    console.log(`${typeof try_unknown}:${try_unknown}`);
}
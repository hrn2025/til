// let item: unknown;
// let item: unknown = 'Hello';
// let item: unknown = 100;
// let item: unknown = undefined;
// let item: unknown = '';
// let item: unknown = null;
let item: unknown = false;

if(typeof item === 'string') {
    console.log(`${typeof item}:${item.length}`);
} else if (typeof item === 'number') {
    console.log(`${typeof item}:${item + 5}`);
} else {
    console.log(`${typeof item}:${item}`);
}
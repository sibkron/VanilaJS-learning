type ExtractArray<T> = T extends any[] ? T : never;
type Data = string | string[] | number | number[];
type ArrayData = ExtractArray<Data>;
type Point = {
    [propname in 'x'|'y']: number
}
type ReadonlyEmployee = {
    readonly [propname in keyof Employee]: Employee[propname]
}

type AllRequired<T> = {
    [propname in keyof T]-?: T[propname]
}
class Entry<K, V> {
    key: K;
    value: V;
    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }
}

type Pair<T> = { first: T, second: T };

function count<T>(arr: T[], target: T){
    let count = 0;
    for (let e of arr) if (e === target) count++;
    return count;
}

let digits = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let result1 = count(digits, 5);

const tail = <T extends { slice(from: number, to?: number): T }>(values: T) =>
    values.slice(1);

let result = tail([1, 7, 2, 9]);
console.dir({ result });    
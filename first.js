class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
function count(arr, target) {
    let count = 0;
    for (let e of arr)
        if (e === target)
            count++;
    return count;
}
let digits = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let result1 = count(digits, 5);
const tail = (values) => values.slice(1);
let result = tail([1, 7, 2, 9]);
console.dir({ result });

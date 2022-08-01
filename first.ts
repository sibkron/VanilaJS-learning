const replace = (arr: number[], target: number | number[], replacement: number) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(target) && target.indexOf(arr[i])
            || !Array.isArray(target) && target === arr[i]) {
            arr[i] = replacement;
        }
    }
}

const a = [11, 12, 13, 14, 15, 16];
console.dir({a});
replace(a, 13, 0);
console.dir({a});
replace(a, [13, 14], 0);
console.dir({a});
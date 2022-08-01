type Numbers = number | number[];
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
enum Weekday1 { MON, TUE, WED, THU, FRI, SAT, SUN };
type Point = { x: number, y: number };
type ErrorCode = [number, string];

const replace = (arr: number[], target: Numbers, replacement: number) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(target) && target.indexOf(arr[i])
            || !Array.isArray(target) && target === arr[i]) {
            arr[i] = replacement;
        }
    }
}

let w: Weekday = 'Mon';
const distanceFromOrigin = (p: Point) => Math.pow(p.x, 2) + Math.pow(p.y, 2);
let code: ErrorCode = [404, 'not found'];

const root = (x: number): number | ErrorCode => {
    if (x >= 0)
        return Math.sqrt(x);
    else
        return [404, 'not found'];
}

const a = [11, 12, 13, 14, 15, 16];
console.dir({a});
replace(a, 13, 0);
console.dir({a});
replace(a, [13, 14], 0);
console.dir({ a });
console.log(w);
type Numbers = number | number[];
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
enum Weekday1 { MON, TUE, WED, THU, FRI, SAT, SUN };
type ErrorCode = [number, string];
type MaybeColorPoint = {
    x: number,
    y: number,
    color?: string
};

interface Identifiable {
    id(): string
}

type Employable = Identifiable & {
    salary(): number
}

type Dictionary = {
    creator: string,
    [arg: string]: string | string[]
}

const dict: Dictionary = { creator: 'Pierre' };
dict.hello = ['bonjour', 'salut', 'allô'];
let str = 'world';
dict[str] = 'monde';

const average = (x: number, y?: number) => y === undefined ? x : (x + y) / 2;

const replace = (arr: number[], target: Numbers, replacement: number) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(target) && target.indexOf(arr[i])
            || !Array.isArray(target) && target === arr[i]) {
            arr[i] = replacement;
        }
    }
}

let w: Weekday = 'Mon';
let code: ErrorCode = [404, 'not found'];

const root = (x: number): number | ErrorCode => {
    if (x >= 0)
        return Math.sqrt(x);
    else
        return [404, 'not found'];
}

class Point {
    #x: number;
    #y: number;

    constructor(x: number, y: number) {
        this.#x = x;
        this.#y = y;
    }

    distance(other: Point) {
        return Math.sqrt(Math.pow(this.#x - other.#x, 2) + Math.pow(this.#y - other.#y, 2))
    }
    
    toString() { return `(${this.#x}, ${this.#y})` }

    static origin = new Point(0, 0);
}

const mkString = (values: unknown[], { separator, leftDelimiter, rightDelimiter }:
    { separator: string, leftDelimiter: string, rightDelimiter: string }) =>
    leftDelimiter + values.join(separator) + rightDelimiter;

class Remover {
    c: string
    constructor(c: string) { this.c = c }
    removeFrom(str: string): string
    removeFrom(str: string[]): string[]
    removeFrom(str: string | string[]) {
    if (Array.isArray(str))
        return str.map(s => s.replace(this.c, ''))
    else
        return str.replace(this.c, '')
    }
}    

const a = [11, 12, 13, 14, 15, 16];
console.dir({a});
replace(a, 13, 0);
console.dir({a});
replace(a, [13, 14], 0);
console.dir({ a });
console.log(w);
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Point_x, _Point_y;
var Weekday1;
(function (Weekday1) {
    Weekday1[Weekday1["MON"] = 0] = "MON";
    Weekday1[Weekday1["TUE"] = 1] = "TUE";
    Weekday1[Weekday1["WED"] = 2] = "WED";
    Weekday1[Weekday1["THU"] = 3] = "THU";
    Weekday1[Weekday1["FRI"] = 4] = "FRI";
    Weekday1[Weekday1["SAT"] = 5] = "SAT";
    Weekday1[Weekday1["SUN"] = 6] = "SUN";
})(Weekday1 || (Weekday1 = {}));
;
const dict = { creator: 'Pierre' };
dict.hello = ['bonjour', 'salut', 'allô'];
let str = 'world';
dict[str] = 'monde';
const average = (x, y) => y === undefined ? x : (x + y) / 2;
const replace = (arr, target, replacement) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(target) && target.indexOf(arr[i])
            || !Array.isArray(target) && target === arr[i]) {
            arr[i] = replacement;
        }
    }
};
let w = 'Mon';
let code = [404, 'not found'];
const root = (x) => {
    if (x >= 0)
        return Math.sqrt(x);
    else
        return [404, 'not found'];
};
class Point {
    constructor(x, y) {
        _Point_x.set(this, void 0);
        _Point_y.set(this, void 0);
        __classPrivateFieldSet(this, _Point_x, x, "f");
        __classPrivateFieldSet(this, _Point_y, y, "f");
    }
    distance(other) {
        return Math.sqrt(Math.pow(__classPrivateFieldGet(this, _Point_x, "f") - __classPrivateFieldGet(other, _Point_x, "f"), 2) + Math.pow(__classPrivateFieldGet(this, _Point_y, "f") - __classPrivateFieldGet(other, _Point_y, "f"), 2));
    }
    toString() { return `(${__classPrivateFieldGet(this, _Point_x, "f")}, ${__classPrivateFieldGet(this, _Point_y, "f")})`; }
}
_Point_x = new WeakMap(), _Point_y = new WeakMap();
Point.origin = new Point(0, 0);
const mkString = (values, { separator, leftDelimiter, rightDelimiter }) => leftDelimiter + values.join(separator) + rightDelimiter;
class Remover {
    constructor(c) { this.c = c; }
    removeFrom(str) {
        if (Array.isArray(str))
            return str.map(s => s.replace(this.c, ''));
        else
            return str.replace(this.c, '');
    }
}
const a = [11, 12, 13, 14, 15, 16];
console.dir({ a });
replace(a, 13, 0);
console.dir({ a });
replace(a, [13, 14], 0);
console.dir({ a });
console.log(w);

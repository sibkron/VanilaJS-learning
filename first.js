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
const replace = (arr, target, replacement) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(target) && target.indexOf(arr[i])
            || !Array.isArray(target) && target === arr[i]) {
            arr[i] = replacement;
        }
    }
};
let w = 'Mon';
const distanceFromOrigin = (p) => Math.pow(p.x, 2) + Math.pow(p.y, 2);
let code = [404, 'not found'];
const root = (x) => {
    if (x >= 0)
        return Math.sqrt(x);
    else
        return [404, 'not found'];
};
const a = [11, 12, 13, 14, 15, 16];
console.dir({ a });
replace(a, 13, 0);
console.dir({ a });
replace(a, [13, 14], 0);
console.dir({ a });
console.log(w);

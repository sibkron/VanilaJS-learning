"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFailedAction = exports.SearchSuccessAction = exports.SearchAction = void 0;
class SearchAction {
    constructor(payload) {
        this.payload = payload;
        this.actionType = "SEARCH";
    }
}
exports.SearchAction = SearchAction;
class SearchSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.actionType = "SEARCH_SUCCESS";
    }
}
exports.SearchSuccessAction = SearchSuccessAction;
class SearchFailedAction {
    constructor() {
        this.actionType = "SEARCH_FAILED";
    }
}
exports.SearchFailedAction = SearchFailedAction;
function area(shape) {
    switch (shape.kind) {
        case "rectangle": return shape.heigth * shape.width;
        case "circle": return Math.PI * shape.radius ** 2;
    }
}
const myRectangle = { kind: "rectangle", width: 10, heigth: 20 };
console.log(`Rectangle's area is ${area(myRectangle)}`);
const myCircle = { kind: "circle", radius: 10 };
console.log(`Circle's area is ${area(myCircle)}`);
//# sourceMappingURL=main.js.map
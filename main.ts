export class SearchAction{
    actionType = "SEARCH";

    constructor(readonly payload: {searchQuery: string}) {}
}

export class SearchSuccessAction{
    actionType = "SEARCH_SUCCESS";

    constructor(public payload: {searchResults: string[]}){}
}

export class SearchFailedAction{
    actionType = "SEARCH_FAILED";
}

export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;

interface Rectangle{
    kind: "rectangle";
    width: number;
    heigth: number;
}

interface Circle{
    kind: "circle";
    radius: number;
}

type Shape = Rectangle | Circle;

function area(shape: Shape) {
    switch (shape.kind) {
        case "rectangle": return shape.heigth * shape.width;
        case "circle": return Math.PI * shape.radius ** 2;
    }
}

const myRectangle: Rectangle = { kind: "rectangle", width: 10, heigth: 20 };
console.log(`Rectangle's area is ${area(myRectangle)}`);

const myCircle: Circle = { kind: "circle", radius: 10 };
console.log(`Circle's area is ${area(myCircle)}`);
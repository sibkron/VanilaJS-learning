"use strict";
class AppState {
    constructor() {
        this.counter = 0;
    }
    ;
    static getInstance() {
        if (AppState.instanceRef === undefined) {
            AppState.instanceRef = new AppState();
        }
        return AppState.instanceRef;
    }
}
const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();
appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;
console.log(appState1.counter);
console.log(appState2.counter);
//# sourceMappingURL=main.js.map
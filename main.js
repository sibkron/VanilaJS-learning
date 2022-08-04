"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(100, 10));
console.log(getFinalPrice(100, 8));
function whoAmi(target) {
    console.log(`You are: \n ${target}`);
}
let Friend = class Friend {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
};
Friend = __decorate([
    whoAmi
], Friend);
let petr = new Friend("Petr", 38);
//# sourceMappingURL=main.js.map
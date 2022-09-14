"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    sellStock(symbol, numberOfShares) {
        console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}
class Employee extends Person {
    constructor(firstName, lastName, age, department) {
        super(firstName, lastName, age);
        this.department = department;
    }
    sellStock(symbol, shares) {
        super.sellStock(symbol, shares);
        this.reportToCompliance(symbol, shares);
    }
    reportToCompliance(symbol, shares) {
        console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
    }
}
const emp1 = new Employee("John", "Smith", 29, "Accounting");
emp1.sellStock('IBM', 100);
//# sourceMappingURL=main.js.map
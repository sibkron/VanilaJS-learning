class Person{
    constructor(public firstName: string, public lastName: string, private age: number) {
        
    }

    sellStock(symbol: string, numberOfShares: number) {
        console.log(`Selling ${numberOfShares} of ${symbol}`);
    }
}

class Employee extends Person{
    constructor(firstName: string, lastName: string, age: number, public department: string) {
        super(firstName, lastName, age);
    }

    sellStock(symbol: string, shares: number): void {
        super.sellStock(symbol, shares);

        this.reportToCompliance(symbol, shares);
    }

    private reportToCompliance(symbol: string, shares: number) {
        console.log(`${this.lastName} from ${this.department} sold ${shares} shares of ${symbol}`);
    }
}

const emp1 = new Employee("John", "Smith", 29, "Accounting");
emp1.sellStock('IBM', 100);

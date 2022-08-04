function getFinalPrice(price: number, discount: number) {
    return price - price / discount;
}

console.log(getFinalPrice(100, 10));
console.log(getFinalPrice(100, 8));

function whoAmi(target: Function): void{
    console.log(`You are: \n ${target}`);
}

@whoAmi
class Friend {
    constructor(private name: string, private age: number) { };
}

let petr = new Friend("Petr", 38);
//Arrays and forEach
var array = (numbers) => {
    numbers.forEach((number) => {
        console.log(number);
    });
};

array([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

//new line
console.log();

//Arrays a for..of
((primeNumbers) => {
    for (let array of primeNumbers) {
        console.log(array);
    }
})([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);

//new line
console.log();

//Arrays a for..in
const address = {
    FirstName: 'George',
    LastName: 'Washington',
    Address: '3200 Mount Vernon Hwy',
    City: 'Mt Vernon',
    State: 'Virginia',
    Zip: '22121'
};
const displayAddress = (address) => {
    for (let property in address) {
        if (address.hasOwnProperty(property)) {
            console.log(property);
        }
    }
};

displayAddress(address);

//new line
console.log();

//ES6 Class
class calculator {
    constructor(operanda , operandb) {
        this.first = operanda ;
        this.last = operandb;
    }

    add() {
        return this.first + this.last;
    }

    subtract() {
        return this.first - this.last;
    }

    multiply() {
        return this.first * this.last;
    }

    divide() {
        return this.first / this.last;
    }
}

var sum = new calculator(2, 3);
var subtract1 = new calculator(5, 2);
var multiply1 = new calculator(3, 5);
var divide1 = new calculator(15, 3);

console.log(sum.add());
console.log(subtract1.subtract());
console.log(multiply1.multiply());
console.log(divide1.divide());

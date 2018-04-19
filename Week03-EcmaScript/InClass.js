//immediate call function
(function() {
    console.log("Immediately invoke with ES5");
})();

((value) => {
    console.log("Immediate invocation ES6", value);
})('foo');

((numbers) => {
    numbers.forEach((number) => {
        console.log(number);
    })
})(['one', 'two', 'three']);

//arrow function
const logger = (numbers) => {
    numbers.forEach((number, i) => {
        console.log(number, i);
    })
}

let numbers = ['four', 'five', 'six'];
logger(numbers);

//
function addEs5(operanda, operandb) {
    return operanda + operandb;
}

const addEs6 = (operanda, operandb) => {
    return operanda + operandb;
};

const addConcise = (a, b) => a + b;

console.log(addEs5(2,3));
console.log(addEs6(5, 7));
console.log(addConcise(12, 14));

//for.. of
((numbers) => {
    for (let number of numbers) {
        console.log(number);
    }
})(['one', 'two', 'three']);

const loggerForOf = (numbers) => {
    for (let number of numbers) {
        console.log(number);
    }
};

loggerForOf(['four', 'five', 'six']);

//for.. in
const myObject = { first: 'alpha', last: 'omega' };
const myObject2 = {first: 'Shawn', last: 'Yang'};
const loggerForIn = (myObject) => {
    for (let property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(property);
            //console.log(myObject[property]);
            console.log(myObject2[property]);
        }
    }
};

loggerForIn(myObject);

//Class
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullName() {
        return this.first + ' ' + this.last;
    }

    // getLast = () => this.last;
}

var person = new Person('George', 'Washington');
console.log(person.fullName());



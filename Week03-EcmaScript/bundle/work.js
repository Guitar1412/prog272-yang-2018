'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Arrays and forEach
var array = function array(numbers) {
    numbers.forEach(function (number) {
        console.log(number);
    });
};

array([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

//new line
console.log();

//Arrays a for..of
(function (primeNumbers) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = primeNumbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _array = _step.value;

            console.log(_array);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
})([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);

//new line
console.log();

//Arrays a for..in
var address = {
    FirstName: 'George',
    LastName: 'Washington',
    Address: '3200 Mount Vernon Hwy',
    City: 'Mt Vernon',
    State: 'Virginia',
    Zip: '22121'
};
var displayAddress = function displayAddress(address) {
    for (var property in address) {
        if (address.hasOwnProperty(property)) {
            console.log(property + ': ' + address[property]);
        }
    }
};

displayAddress(address);

//new line
console.log();

//ES6 Class

var calculator = function () {
    function calculator(operanda, operandb) {
        _classCallCheck(this, calculator);

        this.first = operanda;
        this.last = operandb;
    }

    _createClass(calculator, [{
        key: 'add',
        value: function add() {
            return this.first + this.last;
        }
    }, {
        key: 'subtract',
        value: function subtract() {
            return this.first - this.last;
        }
    }, {
        key: 'multiply',
        value: function multiply() {
            return this.first * this.last;
        }
    }, {
        key: 'divide',
        value: function divide() {
            return this.first / this.last;
        }
    }]);

    return calculator;
}();

var sum = new calculator(2, 3);
var subtract1 = new calculator(5, 2);
var multiply1 = new calculator(3, 5);
var divide1 = new calculator(15, 3);

console.log(sum.add());
console.log(subtract1.subtract());
console.log(multiply1.multiply());
console.log(divide1.divide());
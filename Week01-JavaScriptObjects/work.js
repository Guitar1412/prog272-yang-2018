var person = {firstName: "Shawn", lastName: "Yang", 
	fullName: function(){
		'use strict'; return this.firstName + ' ' + this.lastName;
		}
		};
		
divider("Person");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());


var calculator = {
	Add: function(){
		'use strict';
		return this.operand01 + this.operand02;
	},
	Subtract: function(){
		'use strict';
		return this.operand01 - this.operand02;
	}
};
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

calculator.Multiply = calculator.operand01 * calculator.operand02;

function divider(title){
	console.log("===========================================");
	console.log(title);
	console.log("===========================================");
};

divider("Calculator");
console.log("operand01 =", calculator.operand01);
console.log("operand02 =", calculator.operand02);
console.log("Add: ",calculator.Add());
console.log("Subtract: ", calculator.Subtract());
console.log("Multiply: ", calculator.Multiply);

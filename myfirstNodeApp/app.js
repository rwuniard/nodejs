const person = require('./person');
const Employee = require('./employee');

function greeting(greet) {
    console.log(greet);
}

greeting("hello world!");
greeting('hello ' + person.name)

const emp = new Employee('John', 30);
console.log('hello employee '+ emp.name);
emp.greeting();


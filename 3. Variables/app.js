var name = "Jone Doe";
console.log(name);
name = "James Smith";
console.log(name);

// init var
// can name variable using letters, numbers, _ , $
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

var firstName = "Chathuranga" // Camal case
var LastName = "Jayawardhana" // Pascal case , using for object orianted aspects

// Let 
let str = "lakmal";
console.log(str);
str = 'jaya';
console.log(str);

// const - can't ressign
// const name = "Windy";
// console.log(name);
// name = "Sara";
// console.log(name);  // can't do
// const name;   // can't init without assign value

const person = {     // this is object and we can change it affter
    fsname: "Sara",
    age: 25
}
person.fsname = "Mark";  // his object can change because it is not declare new fsname only change
person.age = 23;
console.log(person);

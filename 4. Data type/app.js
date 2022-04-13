// Primitive

const name = "Jone Doe";
console.log(typeof name);
const num = 34;
console.log(typeof num);
const bool = true;
console.log(typeof bool);
const car = null;
console.log(typeof car); // output > object   this is bug of java script

let test;
console.log(typeof test);  //undefined

const sym = Symbol();

console.log(typeof sym);  // symbol


// Reference type
const hobby = ["Music", "Game"];
console.log(typeof hobby); // object

const address = {
    city: 'Boston',
    state: 'A'
}
console.log(typeof address); // object

const today = new Date();
console.log(today);
console.log(typeof today); // object


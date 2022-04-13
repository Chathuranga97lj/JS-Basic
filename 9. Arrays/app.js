// create array
const numbers = [1, 2, 3, 4, 5];

const numbers2 = new Array(1, 2, 3, 4, 5, 6);

const fruit = ['apple', 'Banana', 'Orange'];

const mix = [22, 'hi', true, undefined, null, {a:2, b:3}, new Date()];

let val;

//get array length
val = numbers.length;

// check if array
val = Array.isArray(numbers);

console.log(val)
console.log(numbers)
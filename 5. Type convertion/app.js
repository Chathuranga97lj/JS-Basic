let val;

//number to string
val = 5;

//output    
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(5);

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(true)

console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

//String to number
val = Number("3");

console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = parseInt("200");

console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = parseFloat('12.34');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

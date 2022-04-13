const fname = "Chathuranga";
const lname = "Jayawardhana";
const age = 25;

let val;

val = fname + lname;

// concatination
val = fname + " " + lname;

// append
val = "lakmal ";
val += "Jayawardhana"


// Escaping
val = 'That\'s awesome, I can\'t wait';


// length
val = fname.length;


// concat method
val = fname.concat(" ", lname);

// change case

val = fname.toUpperCase();
val = fname.toLocaleLowerCase();


console.log(val);
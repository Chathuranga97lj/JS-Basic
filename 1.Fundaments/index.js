// alert("Hello world");

const fname = "Chathuranga";
const lname = "Jayawardhana";
const str = "Hell there my name is Chathuranga";
const tag = "web design, web development, programming";

// String concatination
let val = fname + " " + lname;
console.log(val);

// append 
val = "Will ";
val += "smith";
console.log(val);
const len = val.length;
console.log(len);

//concat method
val = fname.concat(" ", lname);
console.log(val);

// case
val = fname.toUpperCase();
console.log(val);
val = lname.toLowerCase();
console.log(val);

// take char
val = fname[0];
console.log(val);

// take index
val = fname.indexOf('a');
console.log(val);
val = fname.lastIndexOf('a');
console.log(val);

//charAt()
val = fname.charAt(0);
console.log(val);
val = fname.charAt(fname.length - 1);
console.log(val);

//substring()
val = fname.substring(0, 4);
console.log(val);

// slice
val = fname.slice(0, 4)
console.log(val);
val = fname.slice(-4);
console.log(val);

//spilt
val = str.split(" ");
console.log(val);
val = tag.split(",");
console.log(val);

// replace
val = str.replace("Hell", "Hi");
console.log(val);

// include
val = str.includes("Hoo");
console.log(val);
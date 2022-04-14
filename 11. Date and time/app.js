let val;

const today = new Date();
const birthday = new Date('03-11-1997');

val = birthday;
val = today.getMonth(); // zero base  0 - january
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

birthday.setMonth(5);
birthday.setDate(3);
birthday.setFullYear(1998);

//console.log( typeof val);
console.log(birthday);
const person = {
    firstName : "Chathuranga",
    lastName: "Jayawardhana", 
    age: 25,
    email: 'chathuranga97lj@gmail.com',
    hobbies: ['music', 'games'],
    address: {
        city: 'Kurunagala',
        state: 'Ibbagamuwa'
    },
    birthdayYear: function(){
        return 1997
    },
    getBirthday: function(){
        return 2022 - this.age;  // use this keyword 
    }
}

let val;
val = person;

// get specific value
val = person.firstName;
val = person['firstName'];

val = person.age;
val = person.hobbies[1];
val = person.hobbies[0];
val = person.address;
val = person.address.city;
val = person.address['state'];

val = person.birthdayYear();
val = person.getBirthday();

console.log(val)

const peopel = [
    {name: 'Chathuranga', age: 25},
    {name: 'Lakmal', age: 26},
    {name: 'Jayawardhan', age: 27},

]

for(let i=0; i<peopel.length; i++){
    console.log(peopel[i].name);
    console.log(peopel[i].age);
}
// 1) for loop

// for(let i=0; i<10; i++){
//     console.log(`${i}`); 
// }

// 2) while loop

//let i = 0;

// while(i < 10){
//     console.log('Number: ' + i);
//     i++; 
// }

// 3) do while
// do{
//     console.log('Number: ' + i);
//     i++;
// }while(i < 10);


const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }


// >>>>>> forEach array loop
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// })

// >>>>> Map
// const users = [
//     {id:1, name:'Chathu'},
//     {id:2, name:'Lakmal'},
//     {id:3, name:'Jayawardhana'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// })

// const names = users.map(function(user){
//     return user.name;
// })

// console.log(ids);
// console.log(names);




// >>>>>>> For in loop

const user = {
    firstName: 'Chathuranga',
    lastName: 'Lakmal',
    age: 25
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}
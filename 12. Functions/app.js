// 1) fuction declaration

function greet(fname = 'Jone'){
    //console.log('Hello');
    return 'Hello ' + fname;
}

//greet();
//console.log(greet());


// 2). fuction expresions

const square = function(x){
    return x*x;
}

//console.log(square(2));  

// Property method
 const todo = {
     add: function(){
         console.log('add todo..');
     },
     edit: function(){
         console.log('edit todi..');
     }
 }

 todo.add();
 todo.edit();
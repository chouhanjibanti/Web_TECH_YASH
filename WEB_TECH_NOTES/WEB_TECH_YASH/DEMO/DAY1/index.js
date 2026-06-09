// Variable :- variable is container used to store the value.

// Diff types of Variable :- JS ES6+ -> let and const , Arrow function , promises , Async and await ,rest and spread 
// 1. var variable  -> before ES6
// 2. let -> ES6  
// 3. const  -> ES6

// Diff b/w var , let and const :- 
// 1. scope of var is functional.

// function Demo(){
//     var a  = 10;
//     console.log(a);// 10
//     if(true){
//         console.log(a);//10
//     }
// }
// Demo();
// console.log(a);// error // ReferenceError: a is not defined


// scope of let variable is block.
// scope of const variable is block.
// if(true){
//     let name1 = "bhumika";
//    console.log(name1);
//    function Demo1(){
//      console.log(name1);
//    }
//    Demo1()
// }
// console.log(name1);// ReferenceError: name1 is not defined

// Declaration :-
// var a;
// let b;
// const c;// error -> can not declare 

// Reinitilization
// var  a = 10;
// a = 20;
// console.log(a);

// let b = 20;
// b = 200;
// console.log(b);

// const c = 200;
// c = 300;
// console.log(c);// TypeError: Assignment to constant variable.

// const fan = {
//     color:"white",
//     brand:"bajaj",
//     price:5000
// }
// console.log(fan);
// fan.price = 10000;
// console.log(fan);


// ===================================

// redeclaration -> same name 

// var a = 10;
// var a = 20;
// console.log(a);

// let b = 29;
// let b = 2000;
// console.log(b);
// SyntaxError

// const c = 1000;
// const c = 100000;
// console.log(c); //SyntaxError: Identifier 'c' has already been declared

// Error Diff between :

// References Error :- 
// Syntax Error :- redeclaration 
// TypeError: Assignment to constant variable.

// Error handling 
// try {
//     let a = 10;
//     a =a + x ;
//     console.log(a);
// } catch (error) {
//     console.log(error.message);
// }

//   functions :- 
// function declaration  
//  function Parent() {
//     console.log("hy how are you ?");
//  }
//  Parent() 
// // function expression let a = 10;
// let demo = function(){
//   console.log("hy");
// }
// demo()


// Arrow function :- 
// let Child = () => console.log("arrow function");
// Child()
// setTimeout(() => {
//     console.log("hyyyyyyyyyyyyyyyy");
// }, 1000);

// nested function :- function inside function is known as nested function.

// call back fucntion 
// higher order functions 



// Array :- 
// String :- 
// Object :- 


// local storage and session storage and cookies
// promises
// async and await 
// rest and spread operator 
// Dom 
// Events 
// event Loop 
// loop -> for , while , do while 
// closure
// deep copy and shallow copy 
// hoisting 
// datatypes
// setTimeout and setInterval 



// Bubbling  
// capturing 
// debouncing 
// throtling

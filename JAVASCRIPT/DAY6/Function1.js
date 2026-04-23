// function Declaration
// Function Expression

// function Parent(){
//     console.log("hy i am your parent");
// }
// Parent()

// function parameter :- when function declare that time will pass the variable.
// function Arguments :-
// Arithmetic operation


// // implicit
// function Sum(a,b){ // parameter 
//    let c = a+b;
//    console.log(c);
// }
// Sum(10,20) // argumnets 


// // Explicit 
// function Sum(a,b){
//     let c = a+b;
//     return c;
// }
// console.log(Sum(10,20)) 

// print the Even number using the function Declaration 1 to 50 .

// ==================================================

// Expression

// let Sub = function(a,b,c){
//      console.log(a*b*c);
// }
// Sub(10,20,100)

// Prime number - check prime or not .
// Perfect number - Check perfect or not

// =================================

// Arrow function :-  we can reduce the line of code.

// Syntax :-  

// let funcName = () =>{
//      // statememt 
// }

// let Sum = (a,b)=>{
//     console.log(a+b);
// }
// Sum(1000,2000)

// ====================================== 

// // Netsed Function :- function inside function is known as nested function.

// function Parent(){

//     console.log("hy i am parent function");

//     function Child1(){
//         console.log("hy i am child1 function");
        
//     }
//     Child1()
// }
// Parent()
// ---------------------------------------
// function Parent(){

//     console.log("hy i am parent function");

//     function Child1(){
//         console.log("hy i am child1 function");

//         let Child2 = function(){
//             console.log("hy i am child2 function");

//             let child3 = () =>{
//                 console.log("hy i am child 3 function using the arrow function");
//             }
//             child3();
//         }
//         Child2();
//     }
//     Child1()
// }
// Parent()

// -------------------------------------------

// Higher order function :- hof is a function which  accecpt function is a paramter.
// call back function :- cbf is a function who passed as an argument.

// function HOF(cbf){
//    console.log("hy i am higher order function");
//    cbf();
// }
// function Child(){
//    console.log("hy i am child function");
// }
// HOF(Child)


// Print geeting 100 time using the hof and callback function

// function multipleGreet(cbf, a){
//    for(let i=1;i<=a;i++){
//      cbf();
//    }
// }
// function greet(){
//     console.log("Goodmorning");
// }
// multipleGreet(greet,100)









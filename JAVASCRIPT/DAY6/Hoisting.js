// Hoisting 

console.log(a);
var a = 10;

// ReferenceError: Cannot access 'b' before initialization
// tdz :- temproral dead zone :- time b/w the variable declration and variable initilzation.
console.log(b);
let b = 20;

// ReferenceError: Cannot access 'c' before initialization
console.log(c);
const c = 100;

// =================================

// function :-  

// 1. Function Declarataion - poss
// 2. Function Expression - not poss 

Demo()
function Demo(){
    console.log("hy");
}

// expression
// ReferenceError: Cannot access 'Demo' before initialization
Demo()
let Demo = function(){
    console.log("hy i am expression");
}




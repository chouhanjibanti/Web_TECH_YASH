// if(true){
//     var a = 10;
//     console.log(a);
// }
// console.log(a);


// if(true){
//     let b = 20;
//     console.log(b);
// }
// console.log(b);

// if(true){
//     let c = 1000;
//     console.log(c);
// }
// console.log(c);

// ==================================================

// Declaration :- 

// var a;
// let b;
// const c;

// -------------------------------

// reinitilization
// var a = 10;
//  a = 20;
//  console.log(a);

//  let b = 200;
//  b = 300;
//  console.log(b);

//  const c = 1000;
//  c = 2000;
//  console.log(c);


// Redeclaration

// var a = 10;
// var a = 20;
// console.log(a);

// let b = 20;
// let b = 30;

// const c = 200;
// const c = 10;

// =================================


// const a = 10;
// a = 100;
// console.log(a);

// const fan = {
//     color:"white",
//     brand:"bajaj"
// }
// console.log(fan);
// fan.color = "red"
// console.log(fan);


// ========================================


// Types Conversion/Type Casting :- We can convert one datatypes to another 
// datatypes.

// 1. implicit typecasting 
// 2. Explicit typescasting 


// // implicit TC :- 
// console.log(10+10);// 20 
// console.log(10+"10");// number+String -> number -> String  // 1010

//  type corisen // - , * , /  -> String -> number
// console.log(10-"10");// 10-10 // 0
// console.log("10"+"10"); // 0 

// console.log(10*"100"); // 10*100 = 1000
// console.log(10/"2"); // 10/2 => 5

// ==========================================

// Explicit TypeCasting :-

console.log(10+Number("10"));// 20
console.log(10+String(10));// 10+"10" -> "10"+"10" = 1010

console.log(Number("10")+100);// 110 

console.log(Number("100")-'a');// 100-'a' = "100"+'a' =100a

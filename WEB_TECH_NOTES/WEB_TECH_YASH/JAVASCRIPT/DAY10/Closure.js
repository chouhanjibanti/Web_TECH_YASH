// function Parent(){
//     let a = 0;

//     function Child(){
//         a++;
//         console.log(a);
//     }
//     return Child;
// }
// const p = Parent();
// p();
// p();
// p();


// function Parent(){
//     let a = 0;

//    return function(){
//         a++;
//         console.log(a);
//     }
// }
// const p = Parent();
// p();
// p();
// p();


// =======================================

// Nested Object :-  
// shallow copy
let obj1 = {
    name :"yash",
    age:23,
    address:{
        city :"indore"
    }
}
const obj2 = {...obj1};

obj2.address.city = "bhopal"

console.log(obj1.address.city);
// ----------------------------------------

// Deep copy 

// let obj1 = {
//     name :"yash",
//     age:23,
//     address:{
//         city :"indore"
//     }
// }
// let obj2 = JSON.parse(JSON.stringify(obj1))

// obj2.address.city = "Rau";
// obj2.name = "rahul"
// console.log(obj1.address.city);
// console.log(obj2.address.city);
// console.log(obj1.name);

// ===============================================

// Spread and Rest :-  

// Spread :-  

let arr1 = [1,2,3,4]
let arr2 = [4,5,6,7]
let result = [...arr1, ...arr2]
console.log(result);

let person = {
    name:"ajay",
    age:20
}
let details ={
    address : "indore",
    contact : 567887658
}
let personDetails = {...person , ...details}
console.log(personDetails);
// ---------------------------------------------
// Rest :- it will collet the data.
// function Demo(a,b,c,d, e,f){
//    console.log(a+b+c+d+e+f);
// }
// Demo(10,20,30,40,50,60,70,80,90,100,110,120)

function Sum(...number){
 return  number.reduce((num,total)=> {
     return num+total
   },0)
}
console.log(Sum(10,20,30,40,50,60,70,80,90,100,110,120));
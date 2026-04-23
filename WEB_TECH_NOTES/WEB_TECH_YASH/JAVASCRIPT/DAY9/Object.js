// let pen = {
//     color:"black",
//     price:50
// }
// console.log(pen);
// // insert , update , delete 

// pen.type = "marker"
// console.log(pen);

// // update  
// pen.price = 20;
// console.log(pen);

// // delete
// delete pen.price;
// console.log(pen);

// ===============================================
// Methods 
// let pen = {
//     color:"black",
//     price:50,
//     type:"marker"
// }
// console.log(Object.keys(pen));
// console.log(Object.values(pen));
// console.log(Object.entries(pen));

// // freeze method
// Object.freeze(pen)
// pen.price = 100;
// console.log(pen);

// console.log(pen.hasOwnProperty("price"));
// ================================================
// let person = {
//     name1 :"jay",
//     age:23,
//     address:"indore"
// }
// console.log(person);


// suppose i want to create the n number of object 
// but is not possible so that time we can use the blueprint
// functional Contructor 
// function Person(name1,age,address){
//     this.name1 =name1;
//     this.age = age;
//     this.address = address;
// }

// const p = new Person("jay",23,"rau")
// const p1 = new Person("yash",21,"indore")
// console.log(p.name1);
// console.log(p1.age);


// After ES6 :-  
// class -> class 
// consturctor ->when object is created by using this new keyword , constructor call automatically.
// this -> point to the current object.

class Person{
    constructor(name1,age,address){
        this.name1 = name1;
        this.age = age;
        this.address = address;
    }
}

const p2 = new Person("abc",20,"xyz")
console.log(p2.address);

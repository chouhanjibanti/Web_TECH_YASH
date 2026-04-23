// let arr = [1,2,3,4,"hy",true,"by"]

// console.log(arr[2]);

// Display all elements from the array 
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// ==========================================

// Methods of Array :- 
// 1. push - add the element from the last.
// 2. pop  - remove from the last
// 3. shift  - Remove from the begining.
// 4. unshift  - add from starting.
// 5. slice 
// 6. splice 
// 7. include  - check it exists or not.
// 8. indexOf

// Iteration methods 
// 1. foreach 
// 2. for of 
// 3. for in 
// 4. filter 
// 5. map 
// 6. reduce
// 7. some 
// 8. every 
// 9  find 
// 10. findIndex

// seperate push
// let arr = [1,2,3,4,5,6,7]
// arr.push(8)
// console.log(arr);

// // pop
// let arr1 = [1,2,3,4,5,6]
// console.log(arr1.pop());

// // shift 
// let arr2 = [1,2,3,4,5,6]
// console.log(arr2.shift());

// // unshift :- add from begin
// let arr3 = [1,2,3,4,5,6]
// arr3.unshift(1000,2000)
// console.log(arr3);

// // include 
// let arr4 = [1,2,3,4,5,6]
// console.log(arr4.includes(10));

// // slice
// // syntax :- slice(start index , ending index) // exclude - last index
// let arr5 = [1,2,3,4,5,6,7,8,9]
// let slice1 = arr5.slice(1,9);
// console.log(slice1);

// // splice :- 
// // Syntax :- splice(start index , deletCount, 1000,2000)
// let arr6 = [1,2,3,4,5,6,7,8,9]
// let splice1 = arr6.splice(1,5,1000,2000)
// console.log(splice1);
// console.log(arr6);


// // 8. indexOf :- 
// let arr7 = [1,2,3,4,5,6,7,8,9]
// console.log(arr7.indexOf(11));


//  Iteration methods 
// 1. foreach 
// 2. for of 
// 3. for in 
// 4. filter 
// 5. map 
// 6. reduce
// 7. some 
// 8. every 
// 9  find 
// 10. findIndex

// forEach
// let arr8 = [1,2,3,4,5,6,7,8,9,10]
// arr8.forEach((value,index,array)=>{
//     console.log(value ,index , array);
// })

// // for of and for in 
// // for of :- values , array , String 
// // for in :- indexes , key , Array , object 

// // Array 
// let arr9 = [1,2,53,54,23,65,24]
// for(let value of arr9){
//     console.log(value);
// }

// // String 
// let str = "debugshala"
// for(let value1 of str){
//     console.log(value1);
// }

// // for in :- return the index and keys
// // Array 
// let arr10 = [1,2,3,4,4,6,3,6]
// for(let value in arr10){
//     console.log(value);
// }

// // Object 
// let person = {
//     name1 :"ajay",
//     age:23
// }
// for(let value in person){
//     console.log(value);
// }


// map :- we can do some calculation with the array and it will return the new array.

// let arr11 = [1,2,3,4,5,6,7]
// let map1 = arr11.map((num)=>{
//      return num*2;
// })
// console.log(map1);

// reduce :- we can calculation on the array , it will return single value.

// let arr12 = [1,2,3,4,5,6,7]
// let red = arr12.reduce((total,num)=>{ // 1*1// 1+2//3 
//     return total*num;// 28
// },1)
// console.log(red);


// filter :- filter the elements based on the condition.
// let arr13 = [1,2,3,4,5,6,7,8,9]
// let fil = arr13.filter((num)=>{
//    return num%2!==0;
// })
// console.log(fil);

// find :- find the value based on the condition

// let arr14 = [1,2,3,4,5,6,7,8,9]
// let find1 = arr14.find((num)=>{
//    return num%2==0;
// })
// console.log(find1);

// some :- true / false 
// let arr15 = [1,2,3,4,5,6,7,8,9]
// let some1 = arr15.some((num)=>{
//    return num%2==0;
// })
// console.log(some1);

// every 
// let arr16 = [2,4,6,8,1]
// let every1 = arr16.every((num)=>{
//    return num%2==0;
// })
// console.log(every1);


// sort 
// let arr17 = [3,1,5,4,6] // [1,3,4,5,6]
// let sort1 = arr17.sort((a,b)=>{
//       return a-b;
// })
// console.log(sort1);
// 3 ,1 -> 3-1 = 2 positive
// [1,2,5,4,6]
// 2-5 = -3
// 5-4 = 1
// [1,2,4,5,6]


// Reverse 
// let arr18 = [3,1,5,4,6]
// let rev = arr18.reverse();
// console.log(rev);


// Array :- flat methods  // Methods without methods 
let arr = [1,2,[10,20,30,[50,60,60],100]]
// console.log(arr);
let result = arr.flat(Infinity);
console.log(result);






// 1 -> 2  -> 4 -> 7 -> 5 -> 6 -> 3
console.log("1");
console.log("2");

// macro 
setTimeout(() => {
    console.log("3");
}, 0);

console.log("4");

// micro
Promise.resolve().then(()=>{
    console.log("5");
})

// micro 
queueMicrotask(()=>{
    console.log("6");
})
console.log("7");
// 1,2,3,4,7,6,5
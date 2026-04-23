setTimeout(() => {
    console.log("hy i am setTimeout function , 2 second");
}, 2000);
// setTimeout(() => {
//     console.log("hy i am setTimeout function , 3 second");
// }, 3000);

// setTimeout(() => {
//     console.log("hy i am setTimeout function , 5 second");
// }, 5000);




let count = 0;
const interval =setInterval(() => {
    
    count++;
    console.log(count);
    if(count===5){
        clearInterval(interval);// stop the interval
    }
}, 2000);


callback  -> for the asychronus programming 
Promises :-  ES6
Async and Await :-  ES6


Synchronous

line - by - line 
1 
2
3
4
5

Asynchronous 
parellel / no wait 
1
2
3
4
5


// messy code  // multiple call back // call back hell 
settimeOut(()=>{

  setTimeOut(()=>{

 
  setTimeOut(()=>{

  },3000)
  },2000)
},1000)


==================================
Promises :-  ES6 

Promises is a javascript object. It helps to we can handle the asynchronous operation
and it will represent the task either it will resolve/sucess/fullfill or reject/failed in the future.It helps to write readble code.

Promises Syntax :- 
new Promise((resolve,reject)=>{

})

Stages of Promises :- 
1. Pending 
2. Resolve 
3. Reject


Methods :- 
.then   -> when task is resolve
.catch  -> when task is rejected


==========================================


Async and await :- 

Async -> function . it will defined 
await -> wait for the particular time .


async function Demo(){
  await statement -> fetch
  await statement -> convert into the json
}


========================================================



try - catch :- For the error handling we can use the try catch block  , it never stop you program.

try{

}catch(error){

}

=============================

setTimeout :-  we can delay the task for the particular time period.

Example :- animation , api fetch 


setTimeOut(()=>{

},time)


setInterval :- we can perform the task after period of time.

setInterval(()=>{
  
})
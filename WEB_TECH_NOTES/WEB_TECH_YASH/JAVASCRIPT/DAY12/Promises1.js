// pending , resolve , reject 
// methods :- .then , .catch

// const myPromise=new Promise((resolve,reject)=>{
//      let ice_cream = true;
//      if(ice_cream){
//           resolve("ice cream mil gyi")
//      }else{
//            reject("ice cream nhi mili")
//      }
// })
// myPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users

// function fetchPost(){
//   return  fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=> response.json())
//     .then((data)=> {
//         console.log("Fetching posts Data",data);
//     }).catch((error)=>{
//         console.log("fetching post error",error);
//     })
// }

// function fetchUsers(){
//   return  fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=> response.json())
//     .then((data)=> {
//         console.log("Fetching users Data",data);
//     }).catch((error)=>{
//         console.log("fetching users error",error);
//     })
// }

// fetchUsers().then(()=>{
//     fetchPost();
// })
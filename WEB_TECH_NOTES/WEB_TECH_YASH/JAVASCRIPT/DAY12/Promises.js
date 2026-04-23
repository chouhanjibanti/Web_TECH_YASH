// //  Example ..... Simple Example 

// const myPromise = new Promise((resolve , reject)=>{
    
//     let icecream = false;
//     if(icecream === true){
//           resolve('ice cream mil gyi')
//     }else{
//         reject('ice nhi mili')
//     }
// })

// myPromise.then((data)=>{
//    console.log(data);
// }).catch((error)=>{
//    console.log(error);
// })


// ============================================

// Fetch the data from the APIs

// users - https://jsonplaceholder.typicode.com/users
// post - https://jsonplaceholder.typicode.com/posts

function fetchUsers(){
   return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data) => {
        console.log("user fetching data", data);
    }).catch((error)=>{
        console.log("Error fetching users",error);
    })
}

function fetchPosts(){
   return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then((data) => {
        console.log("Posts fetching data", data);
    }).catch((error)=>{
        console.log("Error fetching posts",error);
    })
}

fetchUsers().then(()=>{
     fetchPosts()
})
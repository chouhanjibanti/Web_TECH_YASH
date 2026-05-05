// async function fetchUsers(){
//      try {
//          const response = await fetch("https://jsonpder.typicode.com/users")
//          const data = await  response.json();
//       console.log("fetching users data ",data);
//      } catch (error) {
//          console.log("fetching user error",error);
//      }
// }

// async function fetchPost(){
//      try {
//          const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//          const data = await  response.json();
//       console.log("fetching post data ",data);
//      } catch (error) {
//          console.log("fetching post error",error);
//      }
// }

// async function getData(){
//   await  fetchUsers();
//    await fetchPost()
// }

// //  getData()


// setTimeout(() => {
//     console.log("hy i am setTimeOut function 2") ;
// },2000);

// setTimeout(() => {
//     console.log("hy i am setTimeOut function 5");
// },5000);

// setTimeout(() => {
//     console.log("hy i am setTimeOut function 3");
// },3000);
// setTimeout(() => {
//     console.log("hy i am setTimeOut function 1");
// },1000);


 let count=0;
const interval=setInterval(()=>{
     count++;
     console.log(count);
     if(count==5){
        clearInterval(interval)
     }
},2000)
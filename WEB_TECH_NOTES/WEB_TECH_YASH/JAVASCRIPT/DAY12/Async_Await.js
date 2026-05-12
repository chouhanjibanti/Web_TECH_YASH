async function fetchPosts(){
    try {
      const response = await fetch("https://jslder.typicode.com/posts");
      const data = await response.json();
      console.log("Fetching post data",data);
    } catch (error) {
         console.log("Error fetching post",error);
    }
}

async function fetchUsers(){
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log("Fetching Users data",data);
    } catch (error) {
         console.log("Error fetching users",error);
    }
}

async function fetchData(){
   await fetchPosts();
   await fetchUsers();
}

fetchData();
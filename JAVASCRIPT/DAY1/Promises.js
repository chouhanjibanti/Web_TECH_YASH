async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Users:", data);
    return data;
  } catch (err) {
    console.log("Error fetching users:", err);
  }
}

async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Posts:", data);
    return data;
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
}

// Calling both
async function getData() {
  await fetchUsers();
  await fetchPosts();
}

getData();
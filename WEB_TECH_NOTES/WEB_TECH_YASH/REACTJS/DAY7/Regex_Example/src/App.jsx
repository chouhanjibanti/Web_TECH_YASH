import React from "react";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // email and password Regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/;

    if (!emailRegex.test(email)) {
      setMessage("Invalid Email");
      return;
    }

    if (!passwordRegex.test(password)) {
      setMessage("Password must be atleast 8 characters");
      return;
    }

    // save to localstoarge
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setMessage("user data saved to localstorage");

    // form clear
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </>
  );
}

export default App;

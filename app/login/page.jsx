"use client";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const addNewUser = async (e) => {
    e.preventDefault();
    let response = await fetch("api/posts", {
      method: "POST",
      body: JSON.stringify({ email, name, password }),
    });
    response = await response.json();
    if (response.ok) {
      alert("user successfully registered");
    } else {
      alert("failed to register user");
    }
  };
  return (
    <div className="grid">
      <form action="" className="m-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
        <input type="submit" value="Register" onClick={addNewUser} />
      </form>
    </div>
  );
};
export default Login;

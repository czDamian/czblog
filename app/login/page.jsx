"use client";
import { useState } from "react";

const Login = () => {
  const [info, setInfo] = useState({ email: "", password: "" });
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log({ info });
  return (
    <div className="grid">
      <form onSubmit={handleSubmit} className="m-auto">
        <input
          type="email"
          name="email"
          onChange={(e) => handleInput(e)}
          placeholder="Enter your Email"
        />

        <input
          type="password"
          name="password"
          onChange={(e) => handleInput(e)}
          placeholder="Enter your Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;

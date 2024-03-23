"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("All fields are required");
    }
    try {
      setPending(true);
      console.log(info);
      const res= await signIn("credentials",{
        email: info.email,
        password: info.password,
        redirect: false
      })
      if(res.error){
        setError("User does not exist");
        setPending(false);
        return;
      }
      router.replace("/dashboard");
 
    } catch (error) {
      setPending(false);
      setError("fatal error");
    }
  }

  return (
    <div className="grid mx-10">
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
        {error && <span>{error}</span>}
        <input type="submit" value={pending? "logging in": "Login"} />
      </form>
    </div>
  );
};
export default Login;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router= useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
   
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("All fields are required");
    }
    try {
      setPending(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (res.ok) {
        setPending(false);
        const form = e.target;
        form.reset();
        alert("user successfully registered");
        router.push("/login");
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("something went wrong");
    }
  }

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
        {error && <span>{error}</span>}
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default Register;

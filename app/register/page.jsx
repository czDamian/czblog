"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { Redirect } from "next";

const Register = () => {
  const router = useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
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
        alert("Registration successful. Proceed to login!");
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
    <div className="flex flex-col mx-10 md:mx-0">
      <h1 className="m-auto text-2xl my-4">CREATE A NEW ACCOUNT</h1>
      <form onSubmit={handleSubmit} className="m-auto">
        {error && <span className="text-red-500">{error}</span>}
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
        <input type="submit" value={pending ? "Registering" : "REGISTER"} />
      </form>
    </div>
  );
};
export default Register;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
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
      return;
    }
    try {
      setPending(true);

      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
      });
      if (res.error) {
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
    <div className="flex flex-col mx-10 md:mx-0">
      <h1 className="text-2xl m-auto my-4">LOGIN TO YOUR ACCOUNT</h1>
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
        <input type="submit" value={pending ? "logging in" : "LOGIN"} />
      </form>
    </div>
  );
};
export default LoginForm;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

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
function LoginLoading() {
  return (
    <>
      <span className="loading loading-spinner"></span>
     logging in
    </>
  );
}
  return (
    <div className="flex flex-col mx-10 md:mx-0">
      <h1 className="text-2xl m-auto">Sign In To Continue</h1>
        <form onSubmit={handleSubmit} className="card-body m-auto">
        {error && <span className="text-red-500">{error}</span>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleInput(e)}
            placeholder="eg: abc@abc.com"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleInput(e)}
            placeholder="************"
            className="input input-bordered"
            required
          />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-4">
          <button
            type="submit"
            className="btn btn-primary">
            {pending ?<LoginLoading/> : "LOGIN"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;

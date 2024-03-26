"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
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
function RegisterLoading() {
  return (
    <>
      <span className="loading loading-spinner"></span>
      creating account
    </>
  );
}

  return (
    <div className="flex flex-col mx-10 md:mx-0">
      <h1 className="m-auto text-2xl my-4">Sign Up For An Account</h1>
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
          <label className="label text-right label-text-alt">
            Already have an account?
            <Link href="/login" className=" link link-hover">
              Login
            </Link>
          </label>
        </div>
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary">
            {pending ? <RegisterLoading /> : "REGISTER"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

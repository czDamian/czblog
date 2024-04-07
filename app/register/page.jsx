export const metadata = {
  title: "Register",
};

import Link from "next/link";

const Register = () => {
  return (
    <div className="my-20">
      <form
        action=""
        className="w-[400px] flex flex-col gap-2 m-auto bg-custom-800 p-12 rounded-lg">
        <h1 className="text-center text-2xl mb-8">Create Account</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
        <div className="text-xs flex justify-between">
          <span>Already have an account? </span>
          <Link href="/login" className="text-green-700 underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Register;

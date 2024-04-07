export const metadata = {
  title: "Login",
};

import Link from "next/link";

const Login = () => {
  return (
    <div className="my-40">
      <form
        action=""
        className="w-[400px] flex flex-col gap-2 m-auto bg-custom-800 p-12 rounded-lg">
        <h1 className="text-center text-2xl mb-8">Sign In to continue</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
        <div className="text-xs flex justify-between">
          <span>Don't have an account yet? </span>
          <Link href="/register" className="text-green-700 underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;

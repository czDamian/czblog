import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Blog from "./blog/page";
import FAQ from "@/components/FAQ";

function NotLoggedIn() {
  return (
    <div className="hero py-20 bg-base-200 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="text-center lg:text-left px-10">
          <h1 className="text-5xl font-bold">Welcome to CzBlog</h1>
          <p className="py-6">
            The first ever blog powered by web3. Sign in to your account to get first hand experience of our blog or create a new account if you don't have one already.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default async function Page() {
  const session = await getServerSession(authOptions);
  <FAQ />;

  if (session) {
    return <Blog />;
  }
  return <NotLoggedIn />;
}

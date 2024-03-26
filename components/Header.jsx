import Link from "next/link";
import Logo from "../public/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="navbar">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl no-underline">CzBlog</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image alt="Logo" src={Logo} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;

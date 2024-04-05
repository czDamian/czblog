import Image from "next/image";
import Logo from "../../public/logo.png"
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center ">
      <div className="flex justify-between items-center">
        <span><Image src={Logo} width={40} alt="Logo" height={40}/></span>
        <span>cz Blog</span>
      </div>
      <div className=" space-x-2">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </header>
  );
};
export default Header;

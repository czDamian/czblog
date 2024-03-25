import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-3 border border-transparent border-b-white">
      <div className="text-2xl font-bold">czBlog</div>
      <div className="space-x-2">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </header>
  );
};
export default Header;

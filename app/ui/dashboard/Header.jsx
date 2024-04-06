import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="flex justify-end items-center gap-2 py-2">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};
export default Header;

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="font-bold text-lg">
        cz<span className="text-amber-700">BLOG</span>
      </div>
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="">
          <input
            className="rounded bg-inherit text-inherit border border-amber-900 outline-none px-4 py-1"
            type="search"
            placeholder="Type to search"
          />
        </div>
        <div className="flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

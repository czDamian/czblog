import Link from "next/link";

const Header = () => {
  return (
    <header className="flex p-4 bg-yellow-900">
      <div className="text-2xl font-bold">czBlog</div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </header>
  );
};
export default Header;

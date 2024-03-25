import Link from "next/link"

const Footer = () => {
  return (
    <footer className="p-2 border border-transparent border-t-white">
      <div className="space-x-2 p-2">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </footer>
  );
}

export default Footer
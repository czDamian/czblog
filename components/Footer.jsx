import Link from "next/link"
import FAQ from "./FAQ"

const Footer = () => {
  return (
    <footer className="my-20 p-4">
      <FAQ />
      <div className="space-x-2 my-10">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </footer>
  );
}

export default Footer
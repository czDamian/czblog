import Link from "next/link";

const page = () => {
  return (
    <div className=" p-4 space-x-4 m-40">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/dashboard ">Dashboard</Link>
    </div>
  );
};
export default page;

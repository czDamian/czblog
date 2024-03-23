import Link from "next/link";

export default function Page() {
  return (
    <div className="grid">
      <div className="m-auto text-2xl text-center">
        please
        <div>
          <Link href="/login">Login</Link> or
          <Link href="/register"> Register</Link>
        </div>
        to continue
      </div>
    </div>
  );
}

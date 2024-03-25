import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Blog from "./blog/page";
import FAQ from "@/components/FAQ";

function NotLoggedIn() {
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
export default async function Page() {
  const session = await getServerSession(authOptions);
  <FAQ />;

  if (session) {
    return <Blog />;
  }
  return <NotLoggedIn />;
}

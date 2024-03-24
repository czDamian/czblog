"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <section className="mx-10">
      <div className="text-2xl font-bold my-10">Dashboard</div>
      <div className="">Your Profile</div>
      <div className="">Email: {session?.user?.email}</div>
      <div className="">Expiry Time: {session?.expires}</div>
      <div className="">Session ID: {session?.user?.id}</div>
      <button
        onClick={() => signOut()}
        className="bg-red-400 border px-2 py-1 rounded-md my-2">
        Log Out
      </button>
    </section>
  );
};
export default Dashboard;

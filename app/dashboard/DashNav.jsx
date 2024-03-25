"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const UserSession = () => {
  const { data: session } = useSession();
  return (
    <div className="">
      <span className="font-bold">Logged in as: </span>
      <span className="underline">{session?.user?.email}</span>
    </div>
  );
};
function SignOutUser() {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="bg-red-400 border px-2 py-1 rounded-md my-2">
        Log Out
      </button>
    </div>
  );
}

const UserAbility = () => {
  return (
    <div>
      <div className="">All Users</div>
      <div className="">Create Post</div>
      <div className="">Create Category</div>
      <div className="">Edit Post</div>
      <div className="">Create User</div>
      <div className="">Edit User</div>
    </div>
  );
};
const DashNav = () => {
  return (
    <div className="bg-slate-900 p-2 min-h-[80vh]">
      <div className="grid grid-cols-1 place-content-between h-full gap-10">
        <UserAbility />
        <UserSession />
        <SignOutUser />
      </div>
    </div>
  );
};
export default DashNav;

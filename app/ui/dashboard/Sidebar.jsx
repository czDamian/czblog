"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHouse,
  FaRegClosedCaptioning,
  FaPerson,
  FaBlog,
  FaBook,
  FaPeopleLine,
} from "react-icons/fa6";

const navLinks = [
  { title: "Dashboard", path: "/dashboard", icon: <FaHouse /> },
  { title: "Post", path: "/post", icon: <FaBlog /> },
  { title: "New Post", path: "/post/add", icon: <FaBook /> },
  { title: "Users", path: "/users", icon: <FaPeopleLine /> },
  { title: "New User", path: "/users/add", icon: <FaPerson /> },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className=" flex flex-col gap-10 bg-custom-900  text-sm min-h-[100vh] p-2 max-w-[150px]">
      <div>Image </div>
      <div className="">
        {navLinks.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            title={item.title}
            className={`flex flex-col p-2 hover:bg-custom-800 rounded ml-2 ${
              pathname === item.path && "bg-custom-800"
            }`}>
            <span className="flex items-center gap-2">
              {item.icon} <span className="hidden md:block">{item.title} </span>
            </span>
          </Link>
        ))}
      </div>
      <div>
        <Link
          className="p-2 flex gap-2 items-center hover:bg-custom-800 rounded ml-2"
          href="/logout"
          title="logout">
          <FaRegClosedCaptioning />
          <span className="hidden md:block">Logout </span>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHouse,
  FaRegClosedCaptioning,
  FaPerson,
  FaBlog,
} from "react-icons/fa6";

const navLinks = [
  { title: "Dashboard", path: "/dashboard", icon: <FaHouse /> },
  { title: "Post", path: "/post", icon: <FaBlog /> },
  { title: "Users", path: "/users", icon: <FaPerson /> },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className=" flex flex-col gap-10 bg-custom-900  text-sm min-h-[100vh] p-2 max-w-[150px]">
      <div>Image will be here </div>
      <div className="">
        {navLinks.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={`flex flex-col p-2 hover:bg-custom-800 rounded ml-2 ${
              pathname === item.path && "bg-custom-800"
            }`}>
            <span className="flex items-center gap-2">
              {item.icon} {item.title}
            </span>
          </Link>
        ))}
      </div>
      <div>
        <Link className="p-2 flex gap-2 items-center hover:bg-custom-800 rounded ml-2" href="/logout">
          <FaRegClosedCaptioning /> Logout
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;

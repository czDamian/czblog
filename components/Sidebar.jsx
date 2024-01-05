import Link from "next/link";

function SidebarLinks() {
  const sideLinks = [
    { name: "Create", href: "/dashoard/create" },
    { name: "Edit", href: "/dashboard/edit" },
    { name: "Delete", href: "/dashboard/delete" },
    { name: "Category", href: "/dashboard/category" },
  ];
  return (
    <div className=" ">
      <h1 className="text-lg font-bold my-3">Blog Options</h1>
      <ul>
        {sideLinks.map((links) => (
          <li key={links.name} className="flex flex-col">
            <Link
              className="hover:no-underline bg-stone-950 p-2 mb-1 hover:bg-stone-600 rounded"
              href={links.href}>
              {links.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className="shadow p-4 ">
      <SidebarLinks />
    </div>
  );
};

export default Sidebar;

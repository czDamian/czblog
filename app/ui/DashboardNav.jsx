import Link from "next/link";

const DashboardNav = () => {
  return (
    <section className=" w-max min-w-[150px] ">
      <div className="my-2">
        <h1 className="text-lg font-bold">Create</h1>
        <div className="flex flex-col ml-2">
          <Link className="navLink" href="/dashboard/new-post">
            New Post
          </Link>
          <Link className="navLink" href="/dashboard/new-user">
            New User
          </Link>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-lg font-bold">Manage</h1>
        <div className="flex flex-col ml-2">
          <Link className="navLink" href="/dashboard/category">
            Category
          </Link>
          <Link className="navLink" href="/dashboard/new-post">
            Posts
          </Link>
          <Link className="navLink" href="/dashboard/users">
            Users
          </Link>
        </div>
      </div>
      <div className="my-2">
        <h1 className="text-lg font-bold">Profile</h1>
        <div className="flex flex-col ml-2">
          <Link className="navLink" href="#">
            Edit Profile
          </Link>
          <Link className="navLink" href="#">
            Logout
          </Link>
        </div>
      </div>
    </section>
  );
};
export default DashboardNav;

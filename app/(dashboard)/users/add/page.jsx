export const metadata = {
  title: "Create User",
};

const page = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-2xl font-bold my-8">Create New User</h1>
        <form action="#" className="flex flex-col gap-4 w-[400px] m-auto">
          <input
            className="outline-none bg-custom-900"
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            className="outline-none bg-custom-900"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="outline-none bg-custom-900"
            type="password"
            name="password"
            placeholder="********"
          />
          <label htmlFor="role">Select role</label>
          <select name="role" id="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superAdmin">Super Admin</option>
          </select>
          <input type="submit" value="Create User" />
        </form>
      </div>
    </div>
  );
};
export default page;

import { fetchUsers } from "@/app/lib/fetchdata";
export const metadata = {
  title: "Users",
};
const UserList = async () => {
  const { users, userCount } = await fetchUsers();
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl my-2">User List ({userCount})</h1>
        <div className="flex border p-2 font-bold">
          <div className="w-1/5">Username</div>
          <div className="w-1/5">Email</div>
          <div className="w-1/5">Role</div>
          <div className="w-1/5">Date Created</div>
          <div className="w-1/5 flex items-center space-x-2">Actions</div>
        </div>

        {users.map((user) => (
          <div
            key={user.id}
            c
            className="flex border px-2 py-1 text-xs lg:text-sm gap-1">
            <div className="w-1/5"> {user.username} </div>
            <div className="w-1/5 overflow-x-scroll"> {user.email} </div>
            <div className="w-1/5"> {user.role} </div>
            <div className="w-1/5">
              {user.createdAt?.toString().slice(4, 16)}{" "}
            </div>
            <div className="space-x-2 w-1/5">
              <button className="bg-blue-500">Edit</button>
              <button className="bg-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default UserList;

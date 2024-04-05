import { fetchUsers } from "@/app/lib/fetchdata";

const UserList = async () => {
  const users = await fetchUsers();
  // console.log(users)
  return (
    <div>
      <div>
        <h1>Your Profile</h1>
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-5 border p-2">
            <div> {user.username} </div>
            <div> {user.email} </div>
            <div> {user.role} </div>
            <div> {user.createdAt?.toString().slice(4, 16)} </div>
            <div className="space-x-2">
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

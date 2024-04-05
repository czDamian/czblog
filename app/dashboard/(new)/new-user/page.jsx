import { addUser } from "@/app/lib/actions";

const NewUser = () => {
  return (
    <div className="flex">
      <form action={addUser} className="w-[350px] m-auto">
        <h1>Add User</h1>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="email" name="email" placeholder="abc@example.com" />
        <input type="password" name="password" placeholder="********" />
        <label htmlFor="role">Role</label>
        <select name="role" id="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="super admin">Super Admin</option>
        </select>
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
};
export default NewUser;

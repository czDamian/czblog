const singleUser = () => {
  return (
    <div>
      <div className="text-center text-2xl">view and Update User Profile</div>
      <div className="flex flex-col w-[400px] gap-4 m-auto">
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
        <button className="p-2 bg-green-800">Update</button>
      </div>
    </div>
  );
};
export default singleUser;

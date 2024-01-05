const Register = () => {
  return (
    <div>
      <div>
        <div>
          <form
            className="w-[450px] mt-20 m-auto bg-gray-800 p-4 rounded"
            action=""
            method="post">
            <h1 className="text-2xl text-center">Register Form</h1>
            <div className="flex justify-center flex-col items-center gap-4 py-4">
              <label htmlFor="username">
                <input type="text" placeholder="Enter your username" required />
              </label>
              <label htmlFor="email">
                <input type="text" placeholder="Enter your email" required />
              </label>
              <label htmlFor="password">
                <input type="password" placeholder="*******" required />
              </label>

              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

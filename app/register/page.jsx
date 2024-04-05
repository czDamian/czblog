const Register = () => {
  return (
    <section className="text-center">
      <h1>Sign Up To Continue</h1>
      <div className="flex">
        <form action="#" className="w-[350px] m-auto">
          <input type="text" name="username" placeholder="JohnDoe" />
          <input type="email" name="email" placeholder="email@example.com" />
          <input type="password" name="password" placeholder="********" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </section>
  );
};
export default Register;

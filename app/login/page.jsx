const Login = () => {
  return (
    <section className="text-center">
      <h1>Sign In To Continue</h1>
      <div className="flex">
        <form action="#" className="w-[350px] m-auto">
          <input type="email" name="email" placeholder="email@example.com" />
          <input type="password" name="password" placeholder="********" />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </section>
  );
};
export default Login;

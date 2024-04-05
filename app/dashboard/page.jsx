const profile = { name: "admin", email: "abc@abc.com" };

const Dashboard = () => {
  return (
    <section className="bg-custom-800 m-2">
      <div>
        <h1>Your Profile</h1>

        <p>Welcome back {profile.name} </p>
       
      </div>
    </section>
  );
};
export default Dashboard;

import { connectDb } from "../lib/utils";

const profile = { name: "admin", email: "abc@abc.com" };
export const metadata = {
  title: "Dashboard",
};
const Dashboard = () => {
  connectDb();
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

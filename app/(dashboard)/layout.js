import Header from "../ui/dashboard/Header";
import Sidebar from "../ui/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex flex-row justify-between">
      <Sidebar />
      <div className="flex-[4] bg-custom-800 flex flex-col justify-start px-4">
        <Header />
        {children}
      </div>
    </section>
  );
}

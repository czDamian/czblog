import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 px-4">
      <div className=" md:col-span-2">{children}</div>
      <Sidebar />
    </section>
  );
}

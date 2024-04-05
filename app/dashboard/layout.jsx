import DashboardNav from "../ui/DashboardNav";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex">
      <DashboardNav />
      <div className=" bg-custom-800 w-full" >{children}</div>
    </section>
  );
}

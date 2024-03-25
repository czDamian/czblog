import DashNav from "./DashNav";
export default function DashboardLayout({ children }) {
  return (
    <section className="flex gap-20">
        <DashNav />
        {children}
    </section>
  );
}

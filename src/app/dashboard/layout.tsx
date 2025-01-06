import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Header />
      <div className="dashboard-content">{children}</div>
    </div>
  );
}

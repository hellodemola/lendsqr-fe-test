import BrandLogo from "@/components/common/brandLogo";
import Sidebar from "@/components/dashboard/sidebar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-navbar">
        <div className="dashboard-logo">
          <BrandLogo />
        </div>
        <div className="navbar-menu">
          <div>
            <input type="text" placeholder="search for anything" />
          </div>
          <div className="flex gap-6 align-center">
            <Link href="#">Doc</Link>
            <i>Bell icon</i>
            <div className="">
              <div className="avarter"></div>
              <div id="menu">
                Adedeji
                <i>Icon down</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-content">{children}</div>
    </div>
  );
}

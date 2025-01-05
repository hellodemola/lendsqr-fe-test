import Link from "next/link";
import { sidebarMenu } from "../menus";

export default function Sidebar() {
  return (
    <div className="dashboard-sidebar">
      <p>Switch organization</p>
      <Link href="/"> Dashboard </Link>
      {sidebarMenu.map((menu, index) => (
        <div className="menu" key={index}>
          <h3 className="sidebar-heading">{menu.title}</h3>
          {menu.sub &&
            menu.sub.map((subMenu, index) => (
              <Link key={index} href={subMenu.route}>
                {" "}
                {subMenu.title}{" "}
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

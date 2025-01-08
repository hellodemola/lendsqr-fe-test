"use client";

import Link from "next/link";
import { sidebarMenu } from "../menus";
import Image from "next/image";
import MenuItem from "./menuItem";
import useCurrentPage from "@/hooks/useCurrentPage";

export default function Sidebar() {
  const handleIsCurrentPath = useCurrentPage();
  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-container">
        <button className="dropdown-button">
          <Image
            width={20}
            height={20}
            src="/icons/organization.svg"
            alt="users"
          />
          Switch organization
          <Image
            width={15}
            height={15}
            src="/icons/arrowDown.svg"
            alt="users"
          />
        </button>

        <Link href="/dashboard">
          <MenuItem
            icon="/icons/dashboard.svg"
            title="Dashboard"
            isActive={handleIsCurrentPath("/dashboard")}
          />
        </Link>

        {sidebarMenu.map((menu, index) => (
          <div className="sidebar-menus" key={index}>
            <h3>{menu.title}</h3>
            {menu?.sub?.map((subMenu, index) => {
              return (
                <Link key={index} href={subMenu.route}>
                  <MenuItem
                    icon={`/icons/${subMenu.icon}`}
                    title={subMenu.title}
                    isActive={handleIsCurrentPath(subMenu.route)}
                  />
                </Link>
              );
            })}
          </div>
        ))}

        <div className="sidebar-footer">
          <Link href="/">
            <MenuItem icon="/icons/logout.svg" title="logout" />
          </Link>
          <p>v1.2.0</p>
        </div>
      </div>
    </div>
  );
}

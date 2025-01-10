"use client";

import BrandLogo from "@/components/common/brandLogo";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sidebarMenu } from "../menus";
import Image from "next/image";
import MenuItem from "../sidebar/menuItem";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState<string>();
  const handleMenuSelected = (id: string) => setMenuSelected(id);
  const handleRemoveMenu = () => setMenuSelected(undefined);
  const router = useRouter();

  const handleChangeRoute = (route: string) => {
    setIsOpen(false);
    setMenuSelected(undefined);
    router.push(route);
  };

  const handleOpenMenu = () => setIsOpen(!isOpen);

  return (
    <div className="dashboard-navbar-mobile-container">
      <div className=" dashboard-navbar-mobile">
        <div className="dashboard-logo">
          <div
            onClick={() => handleChangeRoute("/dashboard")}
            className="flex align-center gaps"
          >
            <BrandLogo />
          </div>
        </div>
        <div className="flex right">
          <FontAwesomeIcon
            size="2xl"
            width="2em"
            onClick={handleOpenMenu}
            icon={isOpen ? faClose : faBars}
          />
        </div>
      </div>
      {isOpen && (
        <div className="dashboard-navbar-menu">
          <div>
            {menuSelected ? (
              <>
                <div
                  onClick={handleRemoveMenu}
                  className="flex align-center gaps"
                >
                  <Image
                    width={20}
                    height={20}
                    src="/icons/back-arrow.svg"
                    alt="users"
                  />
                  <p className="capitalize"> {menuSelected} </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex align-center gaps">
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
                </div>

                <div onClick={() => handleChangeRoute("/dashboard")}>
                  <MenuItem icon="/icons/dashboard.svg" title="Dashboard" />
                </div>
              </>
            )}

            <div className="items-container">
              {menuSelected &&
                sidebarMenu
                  .filter((e) => e.title === menuSelected)
                  .map((menu) =>
                    menu.sub.map((submenu, _) => (
                      <div
                        key={_}
                        onClick={() => handleChangeRoute(submenu.route)}
                      >
                        <MenuItem
                          icon={`/icons/${submenu.icon}`}
                          title={submenu.title}
                        />
                      </div>
                    ))
                  )}
              {!menuSelected &&
                sidebarMenu.map((menu, _) => (
                  <div
                    onClick={() => handleMenuSelected(menu.title)}
                    className="invisible-button items"
                    key={_}
                  >
                    <p>{menu.title}</p>
                    <Image
                      width={15}
                      height={15}
                      src="/icons/forward-arrow.svg"
                      alt="users"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

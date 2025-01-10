import BrandLogo from "@/components/common/brandLogo";
import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <div className="dashboard-navbar">
      <div className="dashboard-logo">
        <Link href="/dashboard">
          <BrandLogo />
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for anything"
          />
          <button className="search-button">
            <Image
              width={15}
              height={15}
              src="/icons/search.svg"
              alt="search-icon"
            />
          </button>
        </div>
        <div className="menu-items">
          <Link href="#">Docs</Link>
          <Image width={30} height={30} src="/icons/bell.svg" alt="users" />
          <div className="flex gap-6 align-center">
            <div className="avarter">
              <Image width={60} height={60} src="/profile.svg" alt="avater" />
            </div>
            <div className="flex align-center gaps" id="menu">
              <p>Adedeji</p>
              <Image
                width={30}
                height={30}
                src="/icons/arrDown.svg"
                alt="users"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

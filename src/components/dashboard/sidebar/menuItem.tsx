import Image from "next/image";

interface MenuItemProps {
  icon: string;
  title: string;
  isActive?: boolean;
}

export default function MenuItem({ icon, title, isActive }: MenuItemProps) {
  return (
    <span
      className={`${
        isActive && "sidebar-submenu-item-active"
      } sidebar-submenu-item`}
    >
      <Image width={20} height={20} src={icon} alt={title} />
      {title}
    </span>
  );
}

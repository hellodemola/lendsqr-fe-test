import IUserResp from "@/interface/IUser";
import { addUser } from "@/utils/indexedDBHelper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserFilter from "../forms/userFilter.form";
import { IFilterUserProps } from "@/interface/IFilterUser";

const headings = [
  "organizations",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];

export const statusOption = [
  { id: 1, label: "view details", icon: "eye.svg" },
  { id: 2, label: "blacklist user", icon: "lock-user.svg" },
  { id: 4, label: "activate user", icon: "activate-user.svg" },
];

export default function UserTable({
  users,
  handleFilter,
}: {
  users: IUserResp[];
  handleFilter: (e: IFilterUserProps) => void;
}) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>();
  const [isFilterMenu, setIsFilterMenu] = useState(false);
  const [menuId, setMenuId] = useState<string>();

  const router = useRouter();

  const handleShowMenu = (id: string) => {
    setIsShowMenu(true);
    setMenuId(id);
  };

  const closeDropdown = () => {
    setIsShowMenu(false);
    setMenuId(undefined);
  };

  const handleStatusOption = async (id: string, actionId: number) => {
    console.log({ id, actionId });

    if (actionId === 1) {
      const currentUser = users.find(
        (user) => user.personal_information.id === id
      );
      if (currentUser) {
        await addUser({ ...{ id }, ...currentUser });
        return router.push(`users/${id}`);
      }
      alert("something went wrong!");
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th
              className=""
              key={index}
              onClick={() => setIsFilterMenu(!isFilterMenu)}
            >
              <div className="flex gap">
                {heading}{" "}
                <Image
                  width={15}
                  height={15}
                  alt="filter"
                  src="/icons/filter.svg"
                />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.length > 0 &&
          users.map((user: IUserResp, index) => (
            <tr key={index}>
              <td className="relative">
                {user?.organization[0]?.name}
                {index === 0 && isFilterMenu && (
                  <div className="table-filter">
                    <UserFilter
                      handleFilter={handleFilter}
                      hidePopup={setIsFilterMenu}
                    />
                  </div>
                )}
              </td>
              <td>{user?.personal_information?.username}</td>
              <td>
                <a href={`mailto:${user?.personal_information?.email_address}`}>
                  {user?.personal_information?.email_address}
                </a>
              </td>
              <td>
                <a href={`tel:${user?.personal_information?.phone_number}`}>
                  {user?.personal_information?.phone_number}
                </a>
              </td>
              <td>{user?.personal_information?.joined_date}</td>
              <td>
                <span
                  className={`status ${user?.personal_information?.status}`}
                >
                  {user?.personal_information?.status === "blocked"
                    ? "blacklisted"
                    : user?.personal_information?.status}
                </span>
              </td>
              <td className="relative">
                <button
                  onClick={() => handleShowMenu(user?.personal_information?.id)}
                  className="table-status-button"
                >
                  <Image
                    width={20}
                    height={20}
                    alt="filter"
                    src="/icons/more.svg"
                  />
                </button>
                {isShowMenu && menuId === user?.personal_information?.id && (
                  <div onMouseLeave={closeDropdown} className="table-menu">
                    {statusOption.map((e) => (
                      <div
                        onClick={() =>
                          handleStatusOption(
                            user?.personal_information?.id,
                            e.id
                          )
                        }
                        key={e.id}
                        className="flex gap align-center table-menu-item"
                      >
                        <Image
                          width={20}
                          height={20}
                          alt="filter"
                          src={`/icons/${e.icon}`}
                        />
                        {e.label}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

import IUserResp, { IUserTableProps } from "@/interface/IUser";
import Image from "next/image";
import { useState } from "react";
import UserFilter from "../forms/userFilter.form";
import { headings, statusOption } from "./userConfig";
import useUserTableMenu from "@/hooks/useUserTableMenu";
import useViewUser from "@/hooks/useViewUser";
import useClickOutside from "@/hooks/useClickOutside";

export default function UserTable({ users, handleFilter }: IUserTableProps) {
  const { isShowMenu, menuId, handleShowMenu, handleCloseMenu } =
    useUserTableMenu();
  const handleStatusOption = useViewUser(users);
  const [isFilterMenu, setIsFilterMenu] = useState(false);

  const handleFilterState = () => {
    setIsFilterMenu(!isFilterMenu);
  };

  const popupRef = useClickOutside({ onClose: handleFilterState });

  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th className="" key={index} onClick={handleFilterState}>
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
          users.map((user: IUserResp, index) => {
            const {
              username,
              email_address,
              phone_number,
              joined_date,
              status,
              id,
            } = user?.personal_information;
            return (
              <tr key={index}>
                <td className="relative capitalize">
                  {user?.organization[0]?.name}
                  {index === 0 && isFilterMenu && (
                    <div ref={popupRef} className="table-filter">
                      <UserFilter
                        handleFilter={handleFilter}
                        hidePopup={setIsFilterMenu}
                      />
                    </div>
                  )}
                </td>
                <td>{username}</td>
                <td>
                  <a href={`mailto:${email_address}`}>{email_address}</a>
                </td>
                <td>
                  <a href={`tel:${phone_number}`}>{phone_number}</a>
                </td>
                <td>{joined_date}</td>
                <td>
                  <span className={`status ${status}`}>
                    {status === "blocked" ? "blacklisted" : status}
                  </span>
                </td>
                <td className="relative">
                  <button
                    onClick={() => handleShowMenu(id)}
                    className="table-status-button"
                  >
                    <Image
                      width={20}
                      height={20}
                      alt="filter"
                      src="/icons/more.svg"
                    />
                  </button>
                  {isShowMenu && menuId === id && (
                    <div onMouseLeave={handleCloseMenu} className="table-menu">
                      {statusOption.map((e) => (
                        <div
                          onClick={() => handleStatusOption(id, e.id)}
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
            );
          })}
      </tbody>
    </table>
  );
}

"use client";

import Pagination from "@/components/common/pagination";
import Cards from "@/components/dashboard/cards";
import { UserTable } from "@/components/tables";
import { useGetUsers } from "@/hooks";

export default function Users() {
  const cardInfo = [
    { label: "users", number: 2453, icon: "profile.svg" },
    { label: "active users", number: 2453, icon: "active-users.svg" },
    { label: "users with loans", number: 12453, icon: "loan-users.svg" },
    { label: "users with savings", number: 102453, icon: "saving-users.svg" },
  ];

  const { currentPageData: users, pagination } = useGetUsers();
  return (
    <div>
      <div className="dashboard-heading">
        <h1>Users</h1>
      </div>

      <div className="dashboard-content-container">
        <div id="cards" className="cards">
          {cardInfo.map((each, index) => (
            <Cards
              key={index}
              label={each.label}
              icon={each.icon}
              number={each.number}
            />
          ))}
        </div>
        <div className="table-container">
          <UserTable users={users} />
        </div>
        <Pagination pagination={pagination} />
      </div>
    </div>
  );
}

"use client";

import Pagination from "@/components/common/pagination";
import { UserTable } from "@/components/tables";
import { useGetUsers } from "@/hooks";
import Loading from "./loading";
import { cardInfo } from "@/utils/cardInfo";
import Card from "@/components/dashboard/cards";

export default function Users() {
  const {
    currentPageData: users,
    pagination,
    handleFilter,
    userStats,
    isLoading,
  } = useGetUsers();

  const statsInfo = cardInfo(userStats);

  return (
    <div>
      <div className="dashboard-heading">
        <h1>Users</h1>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="dashboard-content-container">
            <div id="cards" className="cards">
              {statsInfo.map((each, index) => (
                <Card
                  key={index}
                  label={each.label}
                  icon={each.icon}
                  number={each.number}
                />
              ))}
            </div>
            <div className="table-container">
              <UserTable handleFilter={handleFilter} users={users} />
            </div>
            <Pagination pagination={pagination} />
          </div>
        </>
      )}
    </div>
  );
}

import Loading from "@/app/dashboard/users/loading";
import { UsersContext } from "@/hooks/context/useUser.context";
import { cardInfo } from "@/utils/cardInfo";
import getUserStatistics from "@/utils/getUserStatistics";
import { useContext } from "react";
import Card from "../dashboard/cards";
import TableContainer from "./tableContainer";

export default function UsersComponent() {
  const data = useContext(UsersContext);
  const { users, stateStatus } = data;
  const userStats = getUserStatistics(users);
  const statsInfo = cardInfo(userStats);

  return (
    <div>
      <div className="dashboard-heading">
        <h1>Users</h1>
      </div>

      {stateStatus.isLoading ? (
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
            <TableContainer data={data} />
          </div>
        </>
      )}
    </div>
  );
}

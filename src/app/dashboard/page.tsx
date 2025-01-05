import Cards from "@/components/dashboard/cards";
import { UserTable } from "@/components/tables";

export default function DashboardPage() {
  const cardInfo = [
    { label: "users", number: 2453 },
    { label: "active users", number: 2453 },
    { label: "users with loans", number: 12453 },
    { label: "users with savings", number: 102453 },
  ];
  return (
    <div>
      <h1 className="dashboard-heading">Users</h1>
      <div className="">
        <div id="cards" className="cards">
          {cardInfo.map((each, index) => (
            <Cards key={index} label={each.label} number={each.number} />
          ))}
        </div>
        <div className="table-container">
          <UserTable />
        </div>
      </div>
    </div>
  );
}

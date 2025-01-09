import IUserResp from "@/interface/IUser";
import ProfileDetails from "./profileDetails";
import { formatNumbers } from "@/utils/converters/numbers.convert";

export default function SavingDetails({
  currentUser,
}: {
  currentUser: IUserResp;
}) {
  return (
    <div id="personal">
      <div className="profile-section">
        <h3>Savings details</h3>

        <div className="grid grid-5 align-center w-100 large-gap">
          <ProfileDetails
            title="Plan"
            text={currentUser?.savings?.saving_plan}
          />

          <ProfileDetails
            title="Amount"
            text={`N ${formatNumbers(currentUser?.savings?.savings_balance)}`}
          />

          <ProfileDetails
            title="Due date"
            text={currentUser?.savings?.next_due_date}
          />
        </div>
      </div>
    </div>
  );
}

import IUserResp from "@/interface/IUser";
import ProfileDetails from "./profileDetails";
import { formatNumbers } from "@/utils/converters/numbers.convert";

export default function LoanDetails({
  currentUser,
}: {
  currentUser: IUserResp;
}) {
  return (
    <div id="personal">
      <div className="profile-section">
        <h3>Loan details</h3>
        <div className="profile-section">
          {currentUser?.loans.map((e, _) => (
            <div key={_} className="grid grid-5 align-center w-100 large-gap">
              <ProfileDetails title="Loan ID" text={e.loan_id} />

              <ProfileDetails
                title="Loan amount"
                text={`N ${formatNumbers(e.loan_amount)}`}
              />

              <ProfileDetails
                title="Repayment amount"
                text={e?.repayment_amount}
              />

              <ProfileDetails title="Status" text={e?.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

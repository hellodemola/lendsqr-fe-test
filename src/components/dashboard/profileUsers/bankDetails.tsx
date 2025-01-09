import IUserResp from "@/interface/IUser";
import ProfileDetails from "./profileDetails";

export default function BankDetails({
  currentUser,
}: {
  currentUser: IUserResp;
}) {
  return (
    <div id="personal">
      <div className="profile-section">
        <h3>Bank details</h3>
        <div className="grid grid-5 align-center w-100 large-gap">
          <ProfileDetails
            title="Bank name"
            text={currentUser?.bank_details?.bank_name}
          />

          <ProfileDetails
            title="Account number"
            text={currentUser?.bank_details?.account_number}
          />

          <ProfileDetails
            title="Account name"
            text={currentUser?.personal_information?.full_name}
          />
        </div>
      </div>
    </div>
  );
}

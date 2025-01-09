import IUserResp from "@/interface/IUser";
import ProfileDetails from "./profileDetails";

export default function UserDocuments({
  currentUser,
}: {
  currentUser: IUserResp;
}) {
  return (
    <div id="personal">
      <div className="profile-section">
        <h3>Documents</h3>
        <div className="grid grid-5 align-center w-100 large-gap">
          <ProfileDetails
            title="Bank statement"
            text={currentUser?.documents?.bank_statement}
          />

          <ProfileDetails
            title="Identification documents"
            text={currentUser?.documents?.identification}
          />

          <ProfileDetails
            title="Proof of address"
            text={currentUser?.documents?.proof_of_address}
          />
        </div>
      </div>
    </div>
  );
}

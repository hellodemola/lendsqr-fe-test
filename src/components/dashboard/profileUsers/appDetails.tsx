import IUserResp from "@/interface/IUser";
import ProfileDetails from "./profileDetails";

export default function AppDetails({
  currentUser,
}: {
  currentUser: IUserResp;
}) {
  return (
    <div id="personal">
      <div className="profile-section">
        <h3>App and Systems</h3>

        <div className="grid grid-5 align-center w-100 large-gap">
          <ProfileDetails
            title="Last login"
            text={currentUser?.app_and_system?.last_login}
          />

          <ProfileDetails
            title="Registration device"
            text={currentUser?.app_and_system?.registered_device}
          />

          <ProfileDetails
            title="App version"
            text={currentUser?.app_and_system?.app_version}
          />

          <ProfileDetails
            title="Notification status"
            text={currentUser?.app_and_system?.notification_status}
          />
        </div>
      </div>
    </div>
  );
}

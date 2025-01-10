import IUserResp from "@/interface/IUser";
import ProfileDetails from "./profileDetails";

export default function Personal({ currentUser }: { currentUser: IUserResp }) {
  return (
    <div id="personal">
      {/* Personal Information Section */}
      <div className="profile-section">
        <h3>Personal Information</h3>
        <div className="grid grid-5 align-center w-100">
          <ProfileDetails
            title="Full Name"
            text={currentUser?.personal_information?.full_name}
          />
          <ProfileDetails
            title="Phone Number"
            text={currentUser?.personal_information?.phone_number}
          />
          <ProfileDetails
            title="Email Address"
            text={currentUser?.personal_information?.email_address}
          />
          <ProfileDetails
            title="BVN"
            text={currentUser?.personal_information?.bvn}
          />
          <ProfileDetails
            title="Gender"
            text={currentUser?.personal_information?.gender}
          />
          <ProfileDetails
            title="Marital Status"
            text={currentUser?.personal_information?.marital_status}
          />
          <ProfileDetails
            title="Children"
            text={currentUser?.personal_information?.children}
          />
          <ProfileDetails
            title="Type of Residence"
            text={currentUser?.personal_information?.type_of_residence}
          />
        </div>
      </div>

      {/* Education and Employment Section */}
      <div className="profile-section">
        <h3>Education and Employment</h3>
        <div className="grid grid-5 align-center w-100 gap-6">
          <ProfileDetails
            title="Level of Education"
            text={currentUser?.education_and_employment?.level_of_education}
          />
          <ProfileDetails
            title="Employment Status"
            text={currentUser?.education_and_employment?.employment_status}
          />
          <ProfileDetails
            title="Sector of Employment"
            text={currentUser?.education_and_employment?.sector_of_employment}
          />
          <ProfileDetails
            title="Duration of Employment"
            text={currentUser?.education_and_employment?.duration_of_employment}
          />
          <ProfileDetails
            title="Office Email"
            text={currentUser?.education_and_employment?.office_email}
          />
          <ProfileDetails
            title="Monthly Income"
            text={currentUser?.education_and_employment?.monthly_income}
          />
          <ProfileDetails
            title="Loan Repayment"
            text={currentUser?.education_and_employment?.loan_repayment}
          />
        </div>
      </div>

      {/* Socials Section */}
      <div className="profile-section">
        <h3>Socials</h3>
        <div className="grid grid-5 align-center w-100">
          <ProfileDetails
            title="Twitter"
            text={currentUser?.socials?.twitter}
          />
          <ProfileDetails
            title="Facebook"
            text={currentUser?.socials?.facebook}
          />
          <ProfileDetails
            title="Instagram"
            text={currentUser?.socials?.instagram}
          />
        </div>
      </div>

      {/* Guarantor Section */}
      <div className="profile-section">
        <h3>Guarantor</h3>
        {currentUser?.guarantor?.map((guarantor, index) => (
          <div key={index} className="grid grid-5 align-center w-100">
            <ProfileDetails title="Full Name" text={guarantor?.full_name} />
            <ProfileDetails
              title="Phone Number"
              text={guarantor?.phone_number}
            />
            <ProfileDetails
              title="Email Address"
              text={guarantor?.email_address}
            />
            <ProfileDetails
              title="Relationship"
              text={guarantor?.relationship}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

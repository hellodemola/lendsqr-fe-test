import IUserResp from "@/interface/IUser";

export default function Personal({ currentUser }: { currentUser: IUserResp }) {
  return (
    <div id="personal">
      <div className="profile-section">
        <h3>Personal information</h3>
        <div className="grid grid-5 align-center w-100 large-gap">
          <div>
            <h4>Full name</h4>
            <p>{currentUser?.personal_information?.full_name}</p>
          </div>
          <div>
            <h4>Phone number</h4>
            <p>{currentUser?.personal_information?.phone_number}</p>
          </div>

          <div>
            <h4>Email Address</h4>
            <p>{currentUser?.personal_information?.email_address}</p>
          </div>

          <div>
            <h4>BVN</h4>
            <p>{currentUser?.personal_information?.bvn}</p>
          </div>

          <div>
            <h4>Gender</h4>
            <p>{currentUser?.personal_information?.gender}</p>
          </div>

          <div>
            <h4>marital status</h4>
            <p>{currentUser?.personal_information?.marital_status}</p>
          </div>

          <div>
            <h4>children</h4>
            <p>{currentUser?.personal_information?.children}</p>
          </div>

          <div>
            <h4>type of residence</h4>
            <p>{currentUser?.personal_information?.type_of_residence}</p>
          </div>
        </div>
      </div>
      <div className="profile-section">
        <h3>Education and Employment</h3>
        <div className="grid grid-5 align-center w-100 gap-6">
          <div>
            <h4>level of education</h4>
            <p>{currentUser?.education_and_employment?.level_of_education}</p>
          </div>
          <div>
            <h4>employment status</h4>
            <p>{currentUser?.education_and_employment?.employment_status}</p>
          </div>

          <div>
            <h4>sector of employment</h4>
            <p>{currentUser?.education_and_employment?.sector_of_employment}</p>
          </div>

          <div>
            <h4>Duration of employment</h4>
            <p>
              {currentUser?.education_and_employment?.duration_of_employment}
            </p>
          </div>

          <div>
            <h4>office email</h4>
            <p>{currentUser?.education_and_employment?.office_email}</p>
          </div>

          <div>
            <h4>Monthly income</h4>
            <p>{currentUser?.education_and_employment?.monthly_income}</p>
          </div>

          <div>
            <h4>loan repayment</h4>
            <p>{currentUser?.education_and_employment?.loan_repayment}</p>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3>Socials</h3>
        <div className="grid grid-5 align-center w-100 large-gap">
          <div>
            <h4>Twitter</h4>
            <p>{currentUser?.socials?.twitter}</p>
          </div>

          <div>
            <h4>Facebook</h4>
            <p>{currentUser?.socials?.facebook}</p>
          </div>

          <div>
            <h4>Instagram</h4>
            <p>{currentUser?.socials?.instagram}</p>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3>Guarantor</h3>
        {currentUser?.guarantor?.map((e, _) => (
          <div key={_} className="profile-section">
            <div className="grid grid-5 align-center w-100 large-gap">
              <div>
                <h4>full Name</h4>
                <p>{e?.full_name}</p>
              </div>

              <div>
                <h4>Phone Number</h4>
                <p>{e?.phone_number}</p>
              </div>

              <div>
                <h4>Email Address</h4>
                <p>{e?.email_address}</p>
              </div>

              <div>
                <h4>Relationship</h4>
                <p>{e?.relationship}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

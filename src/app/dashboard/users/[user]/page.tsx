import Link from "next/link";

export default async function User({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div>
      <Link href="/dashboard/users">Back to users</Link>
      <div className="grid grid-2 justify-between align-center">
        <h1 className="dashboard-heading">User Details {slug}</h1>
        <div className="flex gap-6">
          <button>Blacklist user</button>
          <button>Activate user</button>
        </div>
      </div>

      <div className="profile-container">
        <div className="flex align-center gap-6">
          <div>
            <h2>Grace Effiom</h2>
            <p>LSQFf587g90</p>
          </div>
          <div>
            <p>User’s Tier</p>
          </div>
          <div>
            <p>₦200,000.00</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="profile-menu">
          <button className="invicisble-button">General Details</button>
          <button className="invicisble-button">Documents</button>
          <button className="invicisble-button">Bank details</button>
          <button className="invicisble-button">Loans</button>
          <button className="invicisble-button">Savings</button>
          <button className="invicisble-button">App and systems</button>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-section">
          <h3>Personal information</h3>
          <div className="grid grid-5 align-center w-100 gap-6">
            <div>
              <h4>Full name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Phone number</h4>
              <p>07060780922</p>
            </div>

            <div>
              <h4>Email Address</h4>
              <p>grace@gmail.com</p>
            </div>

            <div>
              <h4>BVN</h4>
              <p>07060780922</p>
            </div>

            <div>
              <h4>Gender</h4>
              <p>Female</p>
            </div>

            <div>
              <h4>marital status</h4>
              <p>Single</p>
            </div>

            <div>
              <h4>children</h4>
              <p>none</p>
            </div>

            <div>
              <h4>type of residence</h4>
              <p>Parent’s Apartment</p>
            </div>
          </div>
        </div>
        <div className="profile-section">
          <h3>Education and Employment</h3>
          <div className="grid grid-5 align-center w-100 gap-6">
            <div>
              <h4>Full name</h4>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h4>Phone number</h4>
              <p>07060780922</p>
            </div>

            <div>
              <h4>Email Address</h4>
              <p>grace@gmail.com</p>
            </div>

            <div>
              <h4>BVN</h4>
              <p>07060780922</p>
            </div>

            <div>
              <h4>Gender</h4>
              <p>Female</p>
            </div>

            <div>
              <h4>marital status</h4>
              <p>Single</p>
            </div>

            <div>
              <h4>children</h4>
              <p>none</p>
            </div>

            <div>
              <h4>type of residence</h4>
              <p>Parent’s Apartment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

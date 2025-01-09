"use client";

import IUserResp from "@/interface/IUser";
import { formatNumbers } from "@/utils/converters/numbers.convert";
import { getSingleUser } from "@/utils/indexQueries";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Personal from "../../../../components/dashboard/profileUsers/personal";
import UserDocuments from "../../../../components/dashboard/profileUsers/documents";
import BankDetails from "@/components/dashboard/profileUsers/bankDetails";
import LoanDetails from "@/components/dashboard/profileUsers/loanDetails";
import SavingDetails from "@/components/dashboard/profileUsers/savingDetails";
import AppDetails from "@/components/dashboard/profileUsers/appDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as Stars } from "@fortawesome/free-regular-svg-icons";

const userTabMenu = [
  { id: "general_details", label: "general details" },
  { id: "documents", label: "documents" },
  { id: "bank_details", label: "bank details" },
  { id: "loans", label: "loans" },
  { id: "savings", label: "savings" },
  { id: "app_and_system", label: "app and system" },
];

export default function User() {
  const searchParams = useParams();
  const [currentUser, setCurrentUser] = useState<IUserResp | undefined>();
  const [activeBar, setActiveBar] = useState<string>(userTabMenu[0].id);

  const handleUpdateLink = (id: string) => {
    setActiveBar(id);
  };

  useEffect(() => {
    getSingleUser(searchParams.user as string, setCurrentUser);
  }, [searchParams.user]);

  return (
    <div className="">
      <div>
        <Link className="back-container" href="/dashboard/users">
          <Image
            width={20}
            height={20}
            alt="filter"
            src="/icons/back-arrow.svg"
          />
          Back to users
        </Link>
      </div>
      <div className="flex justify-between align-center">
        <div className="dashboard-heading">
          <h1>User Details</h1>
        </div>
        <div className="flex gaps cta-status">
          <button className="outline outline-danger">Blacklist user</button>
          <button className="outline">Activate user</button>
        </div>
      </div>

      <div className="dashboard-content-container">
        <div className="profile-container">
          <div className="flex align-center large-gap">
            <div className="flex gaps align-center">
              <Image
                width={100}
                height={100}
                alt="filter"
                src="/icons/profile-img.svg"
              />
              <div>
                <h2>{currentUser?.personal_information?.full_name}</h2>
                <h3>{currentUser?.personal_information?.id}</h3>
              </div>
            </div>
            <div>
              <h3>User’s Tier</h3>

              <FontAwesomeIcon style={{ color: "#E9B200" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "#E9B200" }} icon={faStar} />
              <FontAwesomeIcon icon={Stars} style={{ color: "#E9B200" }} />
            </div>
            <div>
              <h2>
                &#8358;
                {formatNumbers(currentUser?.savings?.savings_balance || 0)}
              </h2>
              <p className="small-text">
                {currentUser?.bank_details?.account_number}/
                {currentUser?.bank_details?.bank_name}
              </p>
            </div>
          </div>
          <div className={`profile-menu`}>
            {userTabMenu.map((e) => (
              <div
                onClick={() => handleUpdateLink(e.id)}
                key={e.id}
                className={`${
                  activeBar === e.id && "active"
                } invicisble-div capitalize profile-menu-item`}
              >
                {e.label}
              </div>
            ))}
          </div>
        </div>
        <div className="profile-container">
          {currentUser && (
            <div>
              {activeBar === userTabMenu[0].id && (
                <Personal currentUser={currentUser} />
              )}
              {activeBar === userTabMenu[1].id && (
                <UserDocuments currentUser={currentUser} />
              )}
              {activeBar === userTabMenu[2].id && (
                <BankDetails currentUser={currentUser} />
              )}
              {activeBar === userTabMenu[3].id && (
                <LoanDetails currentUser={currentUser} />
              )}
              {activeBar === userTabMenu[4].id && (
                <SavingDetails currentUser={currentUser} />
              )}

              {activeBar === userTabMenu[5].id && (
                <AppDetails currentUser={currentUser} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

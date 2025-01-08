"use client";

import IUserResp from "@/interface/IUser";
import { formatNumbers } from "@/utils/converters/numbers.convert";
import { getSingleUser } from "@/utils/indexQueries";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function User() {
  const searchParams = useParams();
  const [currentUser, setCurrentUser] = useState<IUserResp | undefined>();

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
        <div className="flex gap-6 cta-status">
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
          <div className="profile-menu">
            <div className="invicisble-div">General Details</div>
            <div className="invicisble-div">Documents</div>
            <div className="invicisble-div">Bank details</div>
            <div className="invicisble-div">Loans</div>
            <div className="invicisble-div">Savings</div>
            <div className="invicisble-div">App and systems</div>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-section">
            <h3>Personal information</h3>
            <div className="grid grid-5 align-center w-100 gap-6">
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
          <div className="profile-section hidden">
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
    </div>
  );
}

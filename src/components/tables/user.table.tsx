import IUserResp from "@/interface/IUser";
import Image from "next/image";

const headings = [
  "organizations",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];

export default function UserTable({ users }: { users: IUserResp[] }) {
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th className="" key={index}>
              <div className="flex gap-6">
                {heading}{" "}
                <Image
                  width={15}
                  height={15}
                  alt="filter"
                  src="/icons/filter.svg"
                />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users?.length > 0 &&
          users.map((user: IUserResp, index) => (
            <tr key={index}>
              <td>{user?.personal_information?.full_name}</td>
              <td>{user?.personal_information?.full_name}</td>
              <td>
                <a href={`mailto:${user?.personal_information?.email_address}`}>
                  {user?.personal_information?.email_address}
                </a>
              </td>
              <td>
                <a href={`tel:${user?.personal_information?.phone_number}`}>
                  {user?.personal_information?.phone_number}
                </a>
              </td>
              <td>{user?.personal_information?.joined_date}</td>
              <td>
                <span
                  className={`status ${user?.personal_information?.status}`}
                >
                  {user?.personal_information?.status === "blocked"
                    ? "blacklisted"
                    : user?.personal_information?.status}
                </span>
              </td>
              <td>
                <Image
                  width={20}
                  height={20}
                  alt="filter"
                  src="/icons/more.svg"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

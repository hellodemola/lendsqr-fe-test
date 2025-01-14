import { IFilterUserProps } from "@/interface/IFilterUser";
import IUserResp from "@/interface/IUser";

export default function handleOrgFilter  (users: Array<IUserResp>, filterCriteria: IFilterUserProps): Array<IUserResp> {
    const filterUser = users.filter(item => {
    return (
      (filterCriteria.organization
        ? item.organization.some(org => org.name === filterCriteria.organization)
        : true) &&
      (filterCriteria.email
        ? item.personal_information.email_address === filterCriteria.email
        : true) &&
      (filterCriteria.username
        ? item.personal_information.username.toLowerCase() === filterCriteria.username.toLocaleLowerCase()
        : true) &&
      (filterCriteria.date
        ? item.personal_information.joined_date === filterCriteria.date
        : true) &&
      (filterCriteria.phone
        ? item.personal_information.phone_number === filterCriteria.phone
        : true) &&
      (filterCriteria.status
        ? item.personal_information.status === filterCriteria.status
        : true)
    );
  });

  return filterUser;
  
}

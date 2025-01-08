import { IFilterUserProps } from "@/interface/IFilterUser";
import IUserRes from "@/interface/IUser";
import { saveCompany } from "@/utils/indexQueries";
import { useEffect, useMemo, useState } from "react";

const userUrl = "/api/users";

const useGetUsers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [users, setUsers] = useState<IUserRes[]>([]);
  const [organizations, setOrganization] = useState<string []>([]);


  useEffect(() => {
    fetch(userUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setTotalPage(Number(data?.length));
      })
      .catch((error) => {
        setUsers([]);
        console.log(error);
      });
  }, []);

  useMemo(() => {
    if (users.length > 0){
      const organizationArr = users.map((e) => e.organization.map((e) => e.name));
      const flatOrgArr = [...new Set(organizationArr.flat())]
      saveCompany(flatOrgArr);
      setOrganization(flatOrgArr);
    }
  }, [users])

  const currentPageData = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageOption = (option: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(option.target.value));
  };

  const handleFilter = (filterCriteria: IFilterUserProps) => {
    // Filter data based on criteria
const filteredData = users.filter(item => {
  return (
    (filterCriteria.organization
      ? item.organization.some(org => org.name === filterCriteria.organization)
      : true) &&
    (filterCriteria.email
      ? item.personal_information.email_address === filterCriteria.email
      : true) &&
    (filterCriteria.username
      ? item.personal_information.username === filterCriteria.username
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
setUsers(filteredData)

  }


  return {
    users,
    organizations,
    currentPageData,
    handleFilter,
    pagination: {
      handlePageChange,
      totalPages,
      currentPage,
      handlePageOption,
      pageSize,
    },
  };
};

export default useGetUsers;

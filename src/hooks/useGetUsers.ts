import { IFilterUserProps } from "@/interface/IFilterUser";
import { IStats } from "@/interface/IStats";
import IUserRes from "@/interface/IUser";
import getUserStatistics from "@/utils/getUserStatistics";
import { saveCompany } from "@/utils/indexedDBQueries";
import { useEffect, useMemo, useState } from "react";

const userUrl = "/api/users";



const useGetUsers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [users, setUsers] = useState<IUserRes[]>([]);
  const [organizations, setOrganization] = useState<string []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userStats, setUserStats] = useState<IStats>({
    loanUsers: 0,
    savingsUsers: 0,
    activeUsers: 0,
    allUsers: 0,
  });


  useEffect(() => {
    setIsLoading(true);
    fetch(userUrl)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setTotalPage(Number(data?.length));
        const stats = getUserStatistics(data);
        setUserStats(stats);
      })
      .catch((error) => {
        setUsers([]);
        console.log(error);
      })
      .finally(() => setIsLoading(false))
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
setUsers(filteredData)

  }


  return {
    users,
    organizations,
    userStats,
    currentPageData,
    isLoading,
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

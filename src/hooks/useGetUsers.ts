import { IFilterUserProps } from "@/interface/IFilterUser";
import { IStats } from "@/interface/IStats";
import IUserRes from "@/interface/IUser";
import { handleGetUser } from "@/service/getUsers.api";
import getUserStatistics from "@/utils/getUserStatistics";
import handleOrgFilter from "@/utils/handleOrgFilter";
import { saveCompany } from "@/utils/indexedDBQueries";
import { useEffect, useMemo, useState } from "react";

const userStatsDefaultValue = {
  loanUsers: 0,
  savingsUsers: 0,
  activeUsers: 0,
  allUsers: 0,
}

const useGetUsers = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [users, setUsers] = useState<IUserRes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const [userStats, setUserStats] = useState<IStats>(userStatsDefaultValue);

  const handleUpdates = (data: IUserRes[]) => {
    setUsers(data);
    setTotalPage(data?.length);
    const stats = getUserStatistics(data);
    setUserStats(stats);
  }

  useEffect(() => {
    handleGetUser()
    .then((data) =>  handleUpdates(data))
    .catch(() => setUsers([]))
    .finally(() => setIsLoading(false))
  }, []);

  useMemo(() => {
    if (users.length > 0){
      const organizationArr = users.map((e) => e.organization.map((e) => e.name));
      const flatOrgArr = [...new Set(organizationArr.flat())]
      saveCompany(flatOrgArr);
    }
  }, [users])

  const currentPageData = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (newPage: number) => setCurrentPage(newPage);
  const handlePageOption = (option: React.ChangeEvent<HTMLSelectElement>) => setPageSize(Number(option.target.value));
  const handleFilter = (filterCriteria: IFilterUserProps | undefined) => {
    if (!filterCriteria) {
      setIsFilter(false)
     return handleGetUser()
    }
    setIsFilter(true);
    const filteredData = handleOrgFilter(users, filterCriteria);
    setUsers(filteredData)
}


  return {
    userStats,
    currentPageData,
    isLoading,
    isFilter,
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

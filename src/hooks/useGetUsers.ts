import { IFilterUserProps } from "@/interface/IFilterUser";
import { IStats } from "@/interface/IStats";
import IUserRes from "@/interface/IUser";
import { handleGetUser } from "@/service/getUsers.api";
import getUserStatistics from "@/utils/getUserStatistics";
import handleOrgFilter from "@/utils/handleOrgFilter";
import { saveCompany } from "@/utils/indexedDBQueries";
import userReducer, { intialState } from "@/utils/reducers/userReducer";
import { useEffect, useMemo, useReducer } from "react";
import { useUserAction } from "./useUserAction";
import { status } from "@/interface/IUserReducer";


const useGetUsers = () => {

  const [data, dispatch] = useReducer(userReducer, intialState);
  const { users, currentPage, rowNumber: pageSize, stateStatus } = data;
  const { handleAddUsers, handleUpdateStatus, handleUpdateCurrentPage, handleUpdateRow } = useUserAction(dispatch);

  const handleUserFunc = () => handleGetUser()
  .then((userData: IUserRes[]) => handleAddUsers(userData))
  .catch((error) => console.log(error))
  .finally(() => handleUpdateStatus(status.isLoading, false))
  
  useEffect(() => {
    handleUserFunc()
  }, []);
  
  const userStats:IStats = getUserStatistics(users);
  const totalPages = users?.length;

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

  const handlePageChange = (newPage: number) =>  handleUpdateCurrentPage(newPage);
  const handlePageOption = (e: React.ChangeEvent<HTMLSelectElement>) => handleUpdateRow(Number(e.target.value));
  const handleFilter = (filterCriteria: IFilterUserProps | undefined) => {
    if (!filterCriteria) {
      handleUpdateStatus(status.isFetching, false)
     return handleUserFunc()
    }
    handleUpdateStatus(status.isFetching, true)
    const filteredData = handleOrgFilter(users, filterCriteria);
    handleAddUsers(filteredData)
}


  return {
    userStats,
    currentPageData,
    isLoading: stateStatus.isLoading,
    isFilter: stateStatus.isFetching,
    handleFilter,
    pagination: {
      pageSize,
      totalPages,
      currentPage,
      handlePageChange,
      handlePageOption,
    },
  };
};

export default useGetUsers;

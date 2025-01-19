import IUserRes from "@/interface/IUser";
import { handleGetUser } from "@/service/getUsers.api";
import { saveCompany } from "@/utils/indexedDBQueries";
import userReducer, { intialState } from "@/utils/reducers/userReducer";
import { useEffect, useMemo, useReducer } from "react";
import { useUserAction } from "./useUserAction";
import { status } from "@/interface/IUserReducer";


const useGetUsers = () => {
  const [data, dispatch] = useReducer(userReducer, intialState);
  const { users } = data;
  const actions = useUserAction(dispatch);
  const { handleAddUsers, handleUpdateStatus } = actions

  const handleUserFunc = () => handleGetUser()
  .then((userData: IUserRes[]) => handleAddUsers(userData))
  .finally(() => handleUpdateStatus(status.isLoading, false))
  
  useEffect(() => {
    handleUserFunc()
  }, []);
  
  
  useMemo(() => {
    if (users.length > 0){
      const organizationArr = users.map((e) => e.organization.map((e) => e.name));
      const flatOrgArr = [...new Set(organizationArr.flat())]
      saveCompany(flatOrgArr);
    }
  }, [users])

  return {
    data,
    actions,
  };
};

export default useGetUsers;

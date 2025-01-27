import IUserResp from "@/interface/IUser";
import { status } from "@/interface/IUserReducer";
import { handleGetUser } from "@/service/getUsers.api";
import { useEffect } from "react";

const useCallUsersApi = (handleAddUsers: THandleAddUsers, handleUpdateStatus: THandleUpdateStatus) => {
      const handleUserFunc = () => handleGetUser()
      .then((userData: Array<IUserResp>) => handleAddUsers(userData))
      .finally(() => handleUpdateStatus(status.isLoading, false))
      
      useEffect(() => {
        handleUserFunc()
      }, []);
  }
  
export default useCallUsersApi;

type THandleAddUsers = (users: Array<IUserResp>) => void;
type THandleUpdateStatus = (state: string, status: boolean) => void;
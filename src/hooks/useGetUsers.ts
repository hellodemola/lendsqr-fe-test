import userReducer, { intialState } from "@/utils/reducers/userReducer";
import { useReducer } from "react";
import { useUserAction } from "./useUserAction";
import useCallUsersApi from "./useCallUserApi";
import useSaveCompanies from "./useSaveCompanies";

const useGetUsers = () => {
  const [data, dispatch] = useReducer(userReducer, intialState);
  const actions = useUserAction(dispatch);
  useCallUsersApi(actions.handleAddUsers, actions.handleUpdateStatus);
  useSaveCompanies(data.users);

  return { data, actions };
};

export default useGetUsers;

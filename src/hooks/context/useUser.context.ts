import { intialState } from "@/utils/reducers/userReducer";
import { createContext } from "react";
import { useUserAction } from "../useUserAction";

export const useUserContext = createContext(intialState);

export const UsersContext = createContext(intialState);
export const UserDispatchContext = createContext<ReturnType<typeof useUserAction> | undefined>(undefined);
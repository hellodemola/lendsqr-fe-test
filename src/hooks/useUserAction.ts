import IUserResp from "@/interface/IUser";
import { Action, type } from "@/interface/IUserReducer";
import { Dispatch } from "react";

export const useUserAction = (dispatch: Dispatch<Action>) => {

    const handleAddUsers = (users: IUserResp[]) => {
        dispatch({
          type: type.ADD_USER,
          payload: users
        })
    };
  
    const handleUpdateCurrentPage = (pageNumber: number) => {
      dispatch({
        type: type.UPDATE_CURRENT_PAGE_USER,
        payload: pageNumber
    })
    };
  
    const handleUpdateStatus = (state: string, status: boolean) => {
      dispatch({
        type: type.UPDATE_STATUS,
        payload: { status, state }
        })
    };

    const handleUpdateRow = (rowNumber: number) => {
      dispatch({
        type: type.UPDATE_ROW_NUMBER,
        payload: rowNumber,
      })
    }
  
  
    return { handleAddUsers, handleUpdateCurrentPage, handleUpdateStatus, handleUpdateRow  };
  }
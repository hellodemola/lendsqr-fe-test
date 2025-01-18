import { IFilterUserProps } from "@/interface/IFilterUser";
import IUserResp from "@/interface/IUser";
import { Action, status, type } from "@/interface/IUserReducer";
import handleOrgFilter from "@/utils/handleOrgFilter";
import { Dispatch } from "react";

export const useUserAction = (dispatch: Dispatch<Action>) => {

    const handleAddUsers = (users: IUserResp[]) => {
        dispatch({
          type: type.ADD_USER,
          payload: users
        })
    };

    const handleFilterUsers = (users: IUserResp[] | null) => {
      dispatch({
        type: type.FILTER_USER,
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

    const handleFilter = (
      filterCriteria: IFilterUserProps | undefined, 
      users?: IUserResp[]
    ) => {


      if (!filterCriteria && !users) {
        handleUpdateStatus(status.isFilter, false)
        return handleFilterUsers(null)
      }

      if (filterCriteria && users && users?.length > 0){
        handleUpdateStatus(status.isFilter, true)
        const filtUsers = handleOrgFilter(users, filterCriteria)
        return handleFilterUsers(filtUsers)
      }
  }

    return { handleAddUsers, handleUpdateCurrentPage, handleUpdateStatus, handleUpdateRow, handleFilter }
  
  }
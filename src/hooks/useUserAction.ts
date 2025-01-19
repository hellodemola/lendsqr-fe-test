import { IFilterUserProps } from "@/interface/IFilterUser";
import IUserResp from "@/interface/IUser";
import { Action, status, type } from "@/interface/IUserReducer";
import handleOrgFilter from "@/utils/handleOrgFilter";
import { Dispatch, useCallback } from "react";

export const useUserAction = (dispatch: Dispatch<Action>) => {

  const handleAddUsers = useCallback((users: IUserResp[]) => {
        dispatch({
          type: type.ADD_USER,
          payload: users
        })
    }, [dispatch])

    const handleFilterUsers = useCallback((users: IUserResp[] | null) => {
      dispatch({
        type: type.FILTER_USER,
        payload: users
      })
    }, [dispatch])
  
    const handleUpdateCurrentPage = useCallback((pageNumber: number) => {
      dispatch({
        type: type.UPDATE_CURRENT_PAGE_USER,
        payload: pageNumber
    })
    }, [dispatch])
  
    const handleUpdateStatus = useCallback((state: string, status: boolean) => {
      dispatch({
        type: type.UPDATE_STATUS,
        payload: { status, state }
        })
    }, [dispatch]);

    const handleUpdateRow = useCallback((rowNumber: number) => {
      dispatch({
        type: type.UPDATE_ROW_NUMBER,
        payload: rowNumber,
      })
    }, [dispatch])

    const handleFilter = useCallback((
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
  }, [handleFilterUsers, handleUpdateStatus])

    return { handleAddUsers, handleUpdateCurrentPage, handleUpdateStatus, handleUpdateRow, handleFilter }
  
  }
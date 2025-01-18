import IUserResp from "./IUser";

interface IStateStatus {
    isFilter: boolean,
    isLoading: boolean,
}

export interface IIntialState {
    users: Array<IUserResp>,
    filteredUsers: Array<IUserResp> | null,
    currentPage: number,
    rowNumber: number,
    stateStatus: IStateStatus,
}

export enum status {
    isLoading = 'isLoading',
    isFilter = 'isFilter',
  }

export enum type {
    ADD_USER = 'ADD_USER',
    FILTER_USER = 'FILTER_USER',
    UPDATE_CURRENT_PAGE_USER = 'UPDATE_CURRENT_PAGE_USER',
    UPDATE_ROW_NUMBER = 'UPDATE_ROW_NUMBER',
    UPDATE_STATUS = 'UPDATE_STATUS',
}
  
export type Action =
    | { type: type.ADD_USER,
        payload: IUserResp[] }
    | {type: type.FILTER_USER, payload: IUserResp[] | null}
    | { type: type.UPDATE_CURRENT_PAGE_USER; payload: number }
    | { type: type.UPDATE_ROW_NUMBER; payload: number }
    | { type: type.UPDATE_STATUS; payload: { state: string, status: boolean } }
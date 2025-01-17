import IUserResp from "./IUser";

interface IStateStatus {
    isFetching: boolean,
    isLoading: boolean,
}

export interface IIntialState {
    users: Array<IUserResp>,
    currentPage: number,
    rowNumber: number,
    stateStatus: IStateStatus,
}

export enum status {
    isLoading = 'isLoading',
    isFetching = 'isFetching',
  }

export enum type {
    ADD_USER = 'ADD_USER',
    UPDATE_CURRENT_PAGE_USER = 'UPDATE_CURRENT_PAGE_USER',
    UPDATE_ROW_NUMBER = 'UPDATE_ROW_NUMBER',
    UPDATE_STATUS = 'UPDATE_STATUS',
}
  
export type Action =
    | { type: type.ADD_USER,
        payload: IUserResp[] }
    | { type: type.UPDATE_CURRENT_PAGE_USER; payload: number }
    | { type: type.UPDATE_ROW_NUMBER; payload: number }
    | { type: type.UPDATE_STATUS; payload: { state: string, status: boolean } }
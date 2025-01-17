import { Action, IIntialState, type } from "@/interface/IUserReducer";

export const intialState = {
    users: [],
    currentPage: 1,
    rowNumber: 10,
    stateStatus: {
      isFetching: false,
      isLoading: true,
    }
  };

export default function userReducer (state: IIntialState, action: Action) {
    switch(action.type) {
        case type.ADD_USER:
            return { ...state, users: action.payload }
        case type.UPDATE_CURRENT_PAGE_USER:
            return { ...state, currentPage: action.payload }
        case type.UPDATE_ROW_NUMBER:
            return { ...state, rowNumber: action.payload}
        case type.UPDATE_STATUS:
            return { ...state, 
                stateStatus: {
                ...state.stateStatus,
                [action.payload.state]: action.payload.status,
            } 
        };
        default: 
        return state;
    }
}
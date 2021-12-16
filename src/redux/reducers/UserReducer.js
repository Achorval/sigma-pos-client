import * as types from '../constants/UserConstants';
  
export const UserState = {
    token: undefined,
    user: {},
};

export default function UserReducer(state = UserState, action = {}) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                token: action.data || undefined
            };
            
        case types.LOGOUT_REQUEST:
            return {
                ...state,
                token: undefined,
                user: undefined
            };

        case types.AUTH_TOKEN:
            return {
                ...state,
                token: action.data || undefined
            };

        case types.FETCH_USER_DATA:
            return {
                ...state,
                user: action.data || {}
            };
   
        default:
        return state;
    }
}
    






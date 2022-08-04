import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { GET_ACCOUNT_INFO_ACTION, LOGIN_ACTION } from "../types/types";


let user= {}
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const defaultState = {
    userInfo:user, 
    accountInfo: {},

};
export const LoginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:{
        state.userInfo = action.payload;
        localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
        localStorage.setItem(TOKEN, action.payload.accessToken);
      return {...state, userInfo: action.payload};
    }
      case GET_ACCOUNT_INFO_ACTION:{
        state.accountInfo = action.payload;
        return {...state}
      }
    default:
      return { ...state };
  }
  
};

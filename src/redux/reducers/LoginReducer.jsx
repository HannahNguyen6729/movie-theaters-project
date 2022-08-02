import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { LOGIN_ACTION } from "../types/types";


let user= {}
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const defaultState = {
    userInfo:user
};
export const LoginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
        state.userInfo = action.payload;
        localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
        localStorage.setItem(TOKEN, JSON.stringify(action.payload.accessToken));
      return {...state, userInfo: action.payload};
    default:
      return { ...state };
  }
};

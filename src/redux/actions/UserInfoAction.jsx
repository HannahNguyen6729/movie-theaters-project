

import { history } from "../../App";
import { manageUserService } from "../../services/ManageUserService";
import { LOGIN_ACTION } from "../types/types";


 export const loginAction = (userInfo)=>{
    return async (dispatch) => {
        try{
          const response = await manageUserService.login(userInfo)
          
          //send data to reducer/ redux store
          if(response.status === 200) {
            dispatch({ type: LOGIN_ACTION, payload: response.data.content });
            history.goBack();
          }
        }catch(err){
          console.log(err)
        }
    }
 }
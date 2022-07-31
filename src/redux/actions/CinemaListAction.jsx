
import { manageCinemaService } from "../../services/ManageCinemaService";
import { GET_CINEMA_LIST } from "../types/types";


 export const getCinemaListAction = ()=>{
    return async (dispatch) => {
        try{
          const response = await manageCinemaService.getCinemaList();
          if(response.status === 200){
            dispatch({ type: GET_CINEMA_LIST, payload: response.data.content });
          } 
        }catch(err){
          console.log(err)
        }
    }
 }
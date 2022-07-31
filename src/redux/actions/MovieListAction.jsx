
import { manageMovieService } from "../../services/ManageMovieService";
import { GET_MOVIE_LIST } from "../types/types";


 export const getMovieListAction = (groupId)=>{
    return async (dispatch) => {
        try{
          const response = await manageMovieService.getMovieList(groupId)
          //send data to reducer/ redux store
          dispatch({ type: GET_MOVIE_LIST, payload: response.data.content });
        }catch(err){
          console.log(err)
        }
    }
 }
import Axios from "axios";
import { manageMovieService } from "../../services/ManageMovieService";
import { DOMAIN } from "../../util/settings/config";
import { GET_MOVIE_LIST } from "../types/types";


 export const getMovieListAction = (groupId)=>{
    return async (dispatch) => {
        try{
          const response = await manageMovieService.getMovieList(groupId)
          dispatch({ type: GET_MOVIE_LIST, payload: response.data.content });
        }catch(err){
          console.log(err)
        }
    }
 }
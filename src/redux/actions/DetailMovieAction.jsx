
import { manageMovieService } from "../../services/ManageMovieService";
import { GET_DETAIL_MOVIE } from "../types/types";


 export const getDetailMovieAction = (movieId)=>{
    return async (dispatch) => {
        try{
          const response = await manageMovieService.getDetailMovie(movieId)
          //send data to reducer/ redux store
          dispatch({ type: GET_DETAIL_MOVIE, payload: response.data.content });
        }catch(err){
          console.log(err)
        }
    }
 }
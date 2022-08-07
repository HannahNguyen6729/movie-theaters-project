
import { manageMovieService } from "../../services/ManageMovieService";
import { GET_EDITED_MOVIE_INFO, GET_MOVIE_LIST } from "../types/types";


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
 export const addMovieUploadImgAction = (formData)=>{
  return async (dispatch) => {
    try{
      const response = await manageMovieService.addMovieUploadImg(formData)
      //console.log(response.data.content)
      if(response.status === 200){
        alert('A new movie successfully uploaded!')
      }
    }catch(err){
      console.log(err)
    }
  }
}

 export const getEditedMovieInfoAcion = (movieId)=>{
  return async (dispatch) => {
    try{
      const response = await manageMovieService.getEditedMovieInfo(movieId);
      //console.log(response.data.content)
      if(response.status === 200){
        dispatch({type: GET_EDITED_MOVIE_INFO, payload: response.data.content})
      }
    }catch(err){
      console.log(err)
    }
  }
 }

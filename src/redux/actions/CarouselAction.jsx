import Axios from "axios";
import { manageMovieService } from "../../services/ManageMovieService";
import { DOMAIN } from "../../util/settings/config";
import { SET_BANNER_ARRAY } from "../types/types";

 
 export const getCarouselAction = (params)=>{
    return async (dispatch) => {
        try{
          const response = await manageMovieService.getBannerList()
        //   Axios({
        //     method: "GET",
        //     url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
        //   });
          //console.log(response.data.content);
          dispatch({ type: SET_BANNER_ARRAY, payload: response.data.content });
        }catch(err){
          console.log(err)
        }
    }
 }
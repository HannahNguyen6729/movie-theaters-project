
import { manageSeatListService } from "../../services/ManageSeatListService";
import { TOKEN } from "../../util/settings/config";
import { CHANGE_TAB_ACTIVE, FINISH_BOOKING_SEAT, GET_SEAT_LIST } from "../types/types";


 export const getSeatListAction = (id)=>{
    return async (dispatch) => {
        try{
          console.log('token',localStorage.getItem(TOKEN))
          const response = await manageSeatListService.getSeatList(id)
          //send data to reducer/ redux store
          if(response.status === 200){
            dispatch({ type: GET_SEAT_LIST, payload: response.data.content });
          }
        }catch(err){
          console.log(err)
        }
    }
 }

 export const bookTicketAction = (seatInfo)=>{
  console.log('seatInfo', seatInfo)
  return async (dispatch) => {
    try{
      console.log('token',localStorage.getItem(TOKEN))
      const response = await manageSeatListService.bookTicket(seatInfo)
      //console.log(response.data.content)
      //book ticket successfully, call API to reload seatList
      await dispatch(getSeatListAction(seatInfo.maLichChieu));
      await dispatch({type: FINISH_BOOKING_SEAT});
      await dispatch({type: CHANGE_TAB_ACTIVE});
    }catch(err){
      console.log(err)
    }
}
 }
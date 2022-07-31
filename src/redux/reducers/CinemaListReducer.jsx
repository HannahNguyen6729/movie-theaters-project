import { GET_CINEMA_LIST } from "../types/types";

const defaultState = {
    cinemaList:[],
};
export const CinemaListReducer = (state = defaultState, action)=>{
    switch(action.type){
        case GET_CINEMA_LIST:{
            state.cinemaList = action.payload;
            return {...state};
        }
        default: 
        return {...state};
    }
}

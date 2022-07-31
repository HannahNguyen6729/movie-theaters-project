import { SET_BANNER_ARRAY } from "../types/types";

const defaultState = {
    carouselArray:[
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
          },
          
    ],
}

export const CarouselReducer = (state = defaultState, action) => {
  switch(action.type){
    case SET_BANNER_ARRAY:{
      state.carouselArray = action.payload;
      return {...state}
    }
    default:
        return {...state}
  }
}

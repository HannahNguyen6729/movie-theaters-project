import { BOOKING_SEAT, CHANGE_TABS, CHANGE_TAB_ACTIVE, FINISH_BOOKING_SEAT, GET_SEAT_LIST } from "../types/types";

const defaultState = {
  auditorium: {
    seatList: [],
    movieInfo: {},
  },
  bookingSeatList: [],
  activeKey: 1,
};
export const SeatListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SEAT_LIST: {
      state.auditorium = {
        ...state.auditorium,
        seatList: action.payload.danhSachGhe,
        movieInfo: action.payload.thongTinPhim,
      };
      return { ...state };
    }
    case BOOKING_SEAT: {
      let list = [...state.bookingSeatList];
      let index = list.findIndex((item) => item.stt == action.payload.stt);
      if (index === -1) {
        //no match is found
        list = [...list, action.payload];
      } else {
        list.splice(index, 1);
      }
      return { ...state, bookingSeatList: list };
    }
    case FINISH_BOOKING_SEAT:{
      state.bookingSeatList = [];
      return {...state};
    }
    case CHANGE_TAB_ACTIVE:{
      state.activeKey= 2;
      return { ...state}
    }
    case CHANGE_TABS:{
      state.activeKey= action.payload;
      return { ...state}
    }
    default:
      return { ...state };
  }
};

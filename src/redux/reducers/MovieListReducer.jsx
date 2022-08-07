import { GET_COMING_MOVIES, GET_CURRENT_MOVIES, GET_DETAIL_MOVIE, GET_EDITED_MOVIE_INFO, GET_MOVIE_LIST } from "../types/types";

const defaultState = {
    movieList: [
        {
            "maPhim": 10524,
            "tenPhim": "Doctor Strange",
            "biDanh": "doctor-strange",
            "trailer": "https://www.youtube.com/watch?v=3xccmeAsy8g",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ke-thu-ba_gp03.jpg",
            "moTa": "Lỡ tay làm phép khiến đa vũ trụ nảy sinh vấn đề ở Spider-Man: No Way Home, Doctor Strange “trả nghiệp” thế nào trong Doctor Strange In The Multiverse Of Madness? Có thể nói, chưa bao giờ Stephen Strange phải đối mặt với nhiều mối nguy như hiện tại. “Scarlet Witch” Wanda Maximoff tẩy não cả thị trấn (WandaVision), Loki và Sylvie quậy tung Cơ quan quản lí phương sai thời gian (Loki) và đỉnh điểm là điều ước thay đổi quá nhiều lần của Spider-Man Peter Parker khiến mọi thứ vô cùng hỗn loạn. Xem thêm tại: https://www.galaxycine.vn/dat-ve/doctor-strange-in-the-multiverse-of-madness",
            "maNhom": "GP06",
            "ngayKhoiChieu": "2022-05-04T00:00:00",
            "danhGia": 10,
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
          }, 
    ],
    movieListDefault: [],
    currentMovie: true,
    comingMovie: false,
    detailMovie:{},
    editedMovieInfo:{},
}
export const MovieListReducer = (state = defaultState, action )=>{
    switch(action.type){
        case GET_MOVIE_LIST:{
            state.movieList = action.payload;
            state.movieListDefault = state.movieList;
            return {...state};
        }
        case GET_CURRENT_MOVIES:{
            state.currentMovie = true;
            if(state.comingMovie){
                state.comingMovie = false;
            }
            let newMovieList = state.movieListDefault.filter((item)=> item.dangChieu)
            return {...state, movieList: newMovieList};
        }
        case GET_COMING_MOVIES:{
            state.comingMovie = true;
            if(state.currentMovie){
                state.currentMovie = false;
            }
            let newMovieList = state.movieListDefault.filter((item)=> !item.sapChieu)
            return {...state, movieList: newMovieList};
        }
        case GET_DETAIL_MOVIE:{
            state.detailMovie = action.payload;
            return {...state}
        }
        case GET_EDITED_MOVIE_INFO:{
            state.editedMovieInfo = action.payload;
            return {...state}
        }
        default:
        return {...state}
    }
}
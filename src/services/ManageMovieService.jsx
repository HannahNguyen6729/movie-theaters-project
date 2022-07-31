import { BaseServices } from "./BaseServices";

export class ManageMovieService extends BaseServices{
    constructor(){
        super();
    }
    getBannerList = ()=>{
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    };
    getMovieList =(groupId)=>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupId}`)
    };
    getDetailMovie = (movieId) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    }
}
export const manageMovieService = new ManageMovieService();
